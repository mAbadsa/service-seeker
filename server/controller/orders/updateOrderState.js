const {
  getOrderReqByOrderIdQuery,
  getPriceHourProvider,
  updateOrderOnStart,
  updateOrderOnPause,
  updateOrderOnFinish,
  updateOrderRequestState,
  getUserData,
  getProviderDataById,
} = require('../../database/queries');

const { boomify, calculateDuration, sendTheBill } = require('../../utils');

const updateOrderState = async (req, res, next) => {
  const { id: providerId } = req.user;
  const { orderId } = req.params;
  const { state, resourcesPrice } = req.body;

  try {
    const { rows } = await getOrderReqByOrderIdQuery({
      orderId,
      providerId,
    });

    const [order] = rows;
    const userData = await getUserData({
      userId: order.user_id,
    });

    if (!order) {
      throw boomify(404, 'There is no order');
    }

    if (order.state === state || order.state === 'Finished') {
      throw boomify(400, `the order is already ${order.state}`);
    }

    if (order.state === 'Accepted' && state !== 'Start') {
      throw boomify(409, 'the order is not started yet');
    }

    const newData = {
      bill: null,
      duration: null,
    };

    let workHours;
    let providerPriceHour;

    switch (state) {
      case 'Start':
        await updateOrderOnStart(orderId);
        break;

      case 'Paused':
        workHours = calculateDuration(order.start_date);

        newData.duration = order.hour_number + workHours;

        await updateOrderOnPause(newData.duration, orderId);
        break;

      case 'Finished':
        if (resourcesPrice < 0 || Number.isNaN(resourcesPrice)) {
          throw boomify(400, 'please enter resources price');
        }
        const { rows: [providerData]} = await getProviderDataById(providerId);
        // providerPriceHour = (await getPriceHourProvider(providerId)).rows[0]
        //   .price_hour;
        providerPriceHour = providerData.price_hour;

        if (order.state === 'Start') {
          workHours = calculateDuration(order.start_date);

          newData.duration = order.hour_number + workHours;

          newData.bill = providerPriceHour * workHours;
        } else {
          newData.bill = providerPriceHour * order.hour_number;
        }

        newData.bill += +resourcesPrice;

        await updateOrderOnFinish({
          ...newData,
          resourcesPrice,
          orderId,
        });

        await updateOrderRequestState(order.orders_request_id);
        sendTheBill(
          `${userData}, ${providerData.email}`,
          'Order Bill',
          {
            total: 150,
            hourPrice: 15,
            hourNumber: 10,
            description: 'asd mjdj jhfdj jdhjhf jhjhf',
            client: 'Muhammad',
            provider: 'Ali',
          },
          next
        );
        break;

      default:
    }

    res.json({
      statusCode: 200,
      message: `orders ${state}`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateOrderState;
