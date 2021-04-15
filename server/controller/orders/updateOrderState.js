/* eslint-disable prettier/prettier */
const moment = require('moment');
const {
  getOrderReqByOrderIdQuery,
  getOrder,
  getProviderDataById,
  updateOrderQuery,
} = require('../../database/queries');

const { boomify, calculateDuration } = require('../../utils');

/*
Start => update state, start time
Pause => update state, pause time and duration
Finish => update state, duration, resources and bill
*/

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
    } else if (order.state === 'Didn’t start') {
      throw boomify(409, 'the order is not started yet.');
    }

    const newData = {};

    switch (state) {
      case 'Start':
        newData.start = moment();

        await updateOrderQuery('start_date', newData.start, orderId);
        await updateOrderQuery('paused_date', null, orderId);
        await updateOrderQuery('state', 'Start', orderId);

        res.status(200).json({ statusCode: 200, message: 'orders started' });
        break;
      case 'Pause':
        newData.order = (await getOrder(orderId)).rows;
        newData.start = moment(newData.order[0].start_date);

        newData.pause = moment();

        newData.oldDuration = newData.order[0].hour_number;
        newData.newDuration = calculateDuration(newData.pause, newData.start);
        newData.duration = newData.oldDuration + newData.newDuration;

        await updateOrderQuery('paused_date', newData.pauseTime, orderId);
        await updateOrderQuery('hour_number', newData.duration);
        await updateOrderQuery('state', 'Pause', orderId);

        res.status(200).json({ statusCode: 200, message: 'orders paused' });
        break;
      case 'Finished':
        newData.orderFinish = (await getOrder(orderId)).rows;
        newData.provider = (await getProviderDataById(providerId)).rows;

        await updateOrderQuery('resources_price', req.body.resourcesPrice, orderId);

        newData.hourPrice = newData.provider[0].price_hour;

        if (!newData.orderFinish[0].paused_date) {
          newData.finishTime = moment();
          newData.startFinal = moment(newData.orderFinish[0].start_date);

          newData.oldDuration = newData.orderFinish[0].hour_number;
          newData.newDuration = calculateDuration(newData.finishTime, newData.startFinal);
          newData.duration = newData.oldDuration + newData.newDuration;

          newData.Bill = (newData.hourPrice * newData.FinishDuration)
          + req.body.resourcesPrice;

          await updateOrderQuery('hour_number', newData.duration, orderId);
          await updateOrderQuery('total_bill_price', newData.Bill, orderId);
          await updateOrderQuery('state', 'Finished', orderId);
        } else {
          newData.Bill = (newData.hourPrice * newData.orderFinish[0].hour_number)
          + req.body.resourcesPrice;

          await updateOrderQuery('total_bill_price', newData.Bill, orderId);
          await updateOrderQuery('state', 'Finished', orderId);
        }

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
