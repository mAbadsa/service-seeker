const {
  getOrderReqByOrderIdQuery,
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
    // console.log(order);

    const { rows: result } = await getUserData({
      userId: order.user_id,
    });
    const [userData] = result;
    // console.log(userData);

    const [userDataAsProvider] = (
      await getUserData({
        userId: order.provider_id,
      })
    ).rows;
    // console.log(userDataAsProvider);

    if (!order) {
      throw boomify(404, 'There is no order');
    } else if (order.state === state || order.state === 'Finished') {
      throw boomify(400, `The order is already ${order.state}`);
    } else if (order.state === 'Accepted' && state !== 'Start') {
      throw boomify(409, 'The order is not started yet');
    }

    const newData = {
      bill: null,
      duration: null,
    };

    let workHours;
    let providerPriceHour;
    let providerData;
    let content;

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
        [providerData] = (await getProviderDataById(providerId)).rows;

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

        content = {
          total: newData.bill,
          hourPrice: providerPriceHour,
          hourNumber: workHours,
          resourcesPrice: +resourcesPrice,
          description: order.description,
          client: userData.username,
          provider: userDataAsProvider.username,
        };

        await updateOrderRequestState(order.orders_request_id);

        sendTheBill(
          `${userData.email}, ${userDataAsProvider.email}`,
          'Order Bill',
          content,
          next
        );
        break;

      default:
    }

    res.json({
      statusCode: 200,
      message:
        state === 'Finished'
          ? 'Your order completed successfully, please check your email you will receive an email contains your order bill'
          : ` Orders ${state}`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateOrderState;
