const { deleteOrder } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteOrderController = async (req, res, next) => {
  const { orderReqId } = req.params;
  try {
    const { rowCount } = await deleteOrder(orderReqId);
    if (rowCount === 0) {
      throw boomify(404, 'order-request not found');
    }
    res.status(200).json({ status: 200, message: 'deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteOrderController;
