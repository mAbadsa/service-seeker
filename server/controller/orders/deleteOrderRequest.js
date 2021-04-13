const { deleteOrderReq } = require('../../database/queries');
const { boomify, sendNotification } = require('../../utils');

const deleteOrderReqController = async (req, res, next) => {
  const { id: userId } = req.user;
  const { orderReqId } = req.params;

  try {
    const {
      rows: [user],
      rowCount,
    } = await deleteOrderReq(orderReqId, userId);

    if (rowCount === 0) {
      throw boomify(409, 'no orders were found');
    }

    const { provider_id: providerId, user_id: deletedUserId } = user;
    const to = userId === providerId ? deletedUserId : providerId;
    // Add Notification for thee anther user
    sendNotification(userId, to, 'rejectOrder');

    res.json({ statusCode: 200, message: 'order deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteOrderReqController;
