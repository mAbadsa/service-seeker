/* eslint-disable prettier/prettier */
const moment = require('moment');
const {
  getOrderReqByOrderIdQuery,
  getProviderDataById,
  updateFinish,
  updatePause,
  updateStart,
} = require('../../database/queries');

const { boomify, calculateDuration } = require('../../utils');

const updateOrderState = async (req, res, next) => {
  const { id: providerId } = req.user;
  const { orderId } = req.params;
  const { state } = req.body;

  try {
    const {
      rows: [order],
    } = await getOrderReqByOrderIdQuery({ orderId, providerId });

    if (!order) {
      throw boomify(409, 'There is no order');
    }
    if (order.state === state || order.state === 'Finished') {
      throw boomify(409, `the order is already ${order.state}`);
    }

    const newData = {};

    switch (state) {
      case 'Start':
        newData.start = moment();

        await updateStart('Start', newData.start, orderId);
        break;
      case 'Pause':
        newData.start = moment(order.start_date);

        newData.pause = moment();

        newData.newDuration = calculateDuration(newData.pause, newData.start);
        newData.duration = order.hour_number + newData.newDuration;

        await updatePause('Pause', newData.pause, newData.duration, orderId);
        break;
      case 'Finished':
        if (!req.body.resourcesPrice) {
          throw boomify(400, 'please enter resources price');
        }

        newData.provider = (await getProviderDataById(providerId)).rows;

        if (order.state === 'Start') {
          newData.finishTime = moment();
          newData.startFinal = moment(order.start_date);

          newData.newDuration = calculateDuration(newData.finishTime, newData.startFinal);
          newData.duration = order.hour_number + newData.newDuration;

          newData.hoursPayment = newData.provider[0].price_hour * newData.duration;
          newData.Bill = newData.hoursPayment + Number(req.body.resourcesPrice);
        } else {
          newData.hoursPayment = newData.provider[0].price_hour * order.hour_number;
          newData.Bill = newData.hoursPayment + Number(req.body.resourcesPrice);
        }

        await updateFinish('Finished', newData.duration, req.body.resourcesPrice, newData.Bill, orderId);
        break;
      default:
        res.json({ statusCode: 200, message: 'Nothing to Change' });
    }

    res.json({ statusCode: 200, message: `orders ${state}` });
  } catch (error) {
    next(error);
  }
};

module.exports = updateOrderState;
