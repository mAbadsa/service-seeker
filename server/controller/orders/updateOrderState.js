/* eslint-disable prettier/prettier */
const moment = require('moment');
const {
  updateOrderStatePauseQuery,
  getOrderReqByOrderIdQuery,
  updateStateQuery,
  updateOrderStateStartQuery,
  updateOrderDurationQuery,
  getOrder,
  updateOrderBillQuery,
  getProviderDataById,
  updateOrderResourceQuery
} = require('../../database/queries');

const { boomify } = require('../../utils');

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
        newData.startTime = moment();

        await updateStateQuery(orderId, 'Start');
        await updateOrderStateStartQuery(orderId, newData.startTime);
        await updateOrderStatePauseQuery(orderId, null);

        res.status(200).json({ statusCode: 200, message: 'orders started' });
        break;
      case 'Pause':
        newData.pauseTime = moment();

        await updateStateQuery(orderId, 'Pause');
        await updateOrderStatePauseQuery(orderId, newData.pauseTime);

        newData.order = (await getOrder(orderId)).rows;

        newData.start = moment(newData.order[0].start_date);
        newData.pause = moment(newData.order[0].paused_date);

        newData.duration = moment
          .duration(
            newData.pause.diff(
              newData.start.add(3, 'hours')
            )
          )
          .asHours();

        await updateOrderDurationQuery(orderId, newData.duration);

        res.status(200).json({ statusCode: 200, message: 'orders paused' });
        break;
      case 'Finished':
        await updateOrderResourceQuery(orderId, req.body.resourcesPrice);
        newData.orderFinish = (await getOrder(orderId)).rows;

        newData.provider = (await getProviderDataById(providerId)).rows;

        newData.hourPrice = newData.provider[0].price_hour;

        if (!newData.orderFinish[0].paused_date) {
          newData.finishTime = moment();
          newData.startFinal = moment(newData.orderFinish[0].start_date);

          newData.FinishDuration = moment
            .duration(
              newData.finishTime.diff(
                newData.startFinal.add(3, 'hours')
              )
            )
            .asHours();

          await updateOrderDurationQuery(orderId, newData.FinishDuration);

          newData.resourcePrice = (await getOrder(orderId)).rows;

          newData.Bill = (newData.hourPrice * newData.FinishDuration)
          + newData.orderFinish[0].resources_price;

          await updateOrderBillQuery(orderId, newData.Bill);
          await updateStateQuery(orderId, 'Finished');

          res.status(200).json({ statusCode: 200, message: 'orders finished' });
        } else {
          newData.Bill = (newData.hourPrice * newData.orderFinish[0].hour_number)
          + newData.orderFinish[0].resources_price;

          await updateOrderBillQuery(orderId, newData.Bill);
          await updateStateQuery(orderId, 'Finished');

          res.status(200).json({ statusCode: 200, message: 'orders finished' });
        }
        break;
      default:
        res.json({ statusCode: 200, message: 'Nothing to Change' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateOrderState;
