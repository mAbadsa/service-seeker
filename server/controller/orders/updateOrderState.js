/* eslint-disable prettier/prettier */
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
    } else if (order.state === 'accepted' && state === 'Paused') {
      throw boomify(409, 'the order is not started yet');
    }

    const newData = {};

    switch (state) {
      case 'Start':
        await updateStart(state, orderId);
        break;
      case 'Paused':
        newData.pause = new Date();

        newData.newDuration = calculateDuration(order.start_date, newData.pause);
        newData.duration = order.hour_number + newData.newDuration;

        await updatePause(state, newData.pause, newData.duration, orderId);
        break;
      case 'Finished':
        if (!req.body.resourcesPrice) {
          throw boomify(400, 'please enter resources price');
        }

        newData.provider = (await getProviderDataById(providerId)).rows;

        if (order.state === 'Start') {
          newData.finishTime = new Date();

          newData.newDuration = calculateDuration(order.start_date, newData.finishTime);
          newData.duration = order.hour_number + newData.newDuration;

          newData.hoursPayment = newData.provider[0].price_hour * newData.duration;
        } else {
          newData.hoursPayment = newData.provider[0].price_hour * order.hour_number;
        }

        newData.Bill = newData.hoursPayment + Number(req.body.resourcesPrice);

        await updateFinish(state, newData.duration, req.body.resourcesPrice, newData.Bill, orderId);
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
