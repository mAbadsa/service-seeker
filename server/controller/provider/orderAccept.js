const {
  acceptOrder,
  updateStateOrderRequest,
  getOrderByUserID,
} = require('../../database/queries');

const { boomify } = require('../../utils');

const acceptOrderController = async (req, res, next) => {
  const { id: userID } = req.user;
  const { arriveTime, orderID } = req.body;

  try {
    const {
      rows: [{ id, state }],
    } = await getOrderByUserID(userID, orderID);

    if (state === 'pending') {
      await updateStateOrderRequest(id);
    } else {
      throw boomify(409, 'order already accepted');
    }

    await acceptOrder(arriveTime, id, 'accepted');

    res
      .status(200)
      .json({ status: 200, message: 'order accepted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = acceptOrderController;
