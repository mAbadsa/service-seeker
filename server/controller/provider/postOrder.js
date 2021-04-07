const {
  postOrder,
  updateStateOrderRequest,
} = require('../../database/queries');

const { boomify } = require('../../utils');

const postOrderController = async (req, res, next) => {
  const { id: userID } = req.user;
  const { arriveTime, orderID } = req.body;

  try {
    const { rowCount } = await updateStateOrderRequest(orderID, userID);
    if (rowCount === 0) {
      throw boomify(409, 'order already accepted');
    }
    await postOrder(arriveTime, orderID, 'accepted');

    res
      .status(201)
      .json({ status: 201, message: 'order accepted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = postOrderController;
