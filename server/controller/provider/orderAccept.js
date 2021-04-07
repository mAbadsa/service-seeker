const {
  acceptOrder,
  updateStateOrderRequest,
} = require('../../database/queries');

const acceptOrderController = async (req, res, next) => {
  const { id: userID } = req.user;
  const { arriveTime, orderID } = req.body;

  try {
    await updateStateOrderRequest(orderID, userID);
    await acceptOrder(arriveTime, orderID, 'accepted');

    // console.log({ arriveTime, orderID, userID });

    res
      .status(201)
      .json({ status: 201, message: 'order accepted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = acceptOrderController;
