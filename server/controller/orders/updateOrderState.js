/* eslint-disable prettier/prettier */
const moment = require('moment');
const {
  getOrderReqByOrderIdQuery,
  getOrder,
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

    const {
      rows: [provider]
    } = await getProviderDataById(providerId);

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

        res.status(200).json({ statusCode: 200, message: 'orders started' });
        break;
      case 'Pause':
        newData.start = moment(order.start_date);

        newData.pause = moment();

        newData.newDuration = calculateDuration(newData.pause, newData.start);
        newData.duration = order.hour_number + newData.newDuration;

        await updatePause('Pause', newData.pause, newData.duration, orderId);

        res.status(200).json({ statusCode: 200, message: 'orders paused' });
        break;
      case 'Finished':
        if (!req.body.resourcesPrice) {
          throw boomify(400, 'please enter resources price');
        }

        if (order.state === 'Start') {
          newData.finishTime = moment();
          newData.startFinal = moment(order.start_date);

          newData.newDuration = calculateDuration(newData.finishTime, newData.startFinal);
          newData.duration = order.hour_number + newData.newDuration;

          newData.hoursPayment = provider.price_hour * newData.duration;
          newData.Bill = newData.hoursPayment + Number(req.body.resourcesPrice);
        } else {
          newData.hoursPayment = provider.price_hour * order.hour_number;
          newData.Bill = newData.hoursPayment + Number(req.body.resourcesPrice);
        }

        await updateFinish('Finished', newData.duration, req.body.resourcesPrice, newData.Bill, orderId);
        newData.finishOrder = (await getOrder(orderId)).rows;
        res.status(200).json({ statusCode: 200, data: newData.finishOrder });
        break;
      default:
        res.json({ statusCode: 200, message: 'Nothing to Change' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateOrderState;
