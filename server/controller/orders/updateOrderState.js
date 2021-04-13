/* eslint-disable prettier/prettier */
const moment = require('moment');
const {
  updateOrderStateQuery,
  getOrderReqByOrderIdQuery,
  getProviderDataById,
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
    }

    const newData = { state };

    if (state === 'Start') {
      newData.start_date = moment();
    } else {
      if (order.state === 'Didn’t start') {
        throw boomify(409, 'the order is Start yet.');
      }
      // check if he already pause and send Finished
      if (order.state !== 'Pause' && state !== 'Finished') {
        newData.paused_date = moment();
        // calculate new hour_number
        newData.hour_number = order.hour_number
          + moment
            .duration(
              moment().diff(
                moment(order.start_date).add(3, 'hours')
              )
            )
            .asHours();
      }
      if (state === 'Finished') {
        const { resources_price: resourcesPrice } = req.body;
        if (!resourcesPrice) {
          throw boomify(400, 'You have to send resources price.');
        }
        // set financial stuff
        newData.resources_price = resourcesPrice;
        const {
          rows: [provider],
        } = await getProviderDataById({ id: providerId });
        newData.total_bill_price = resourcesPrice + order.hour_number * provider.price_hour;
      }
    }
    await updateOrderStateQuery({ orderId, newData });
    res.send({
      statusCode: 200,
      massage: `the order is ${state} successfully`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateOrderState;
