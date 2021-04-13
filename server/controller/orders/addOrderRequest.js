const { addOrderRequest, isAlreadyHeired } = require('../../database/queries');
const { boomify, sendNotification } = require('../../utils');

const userOrderRequest = async (req, res, next) => {
  const { id: userId } = req.user;
  const { providerId } = req.body;
  try {
    if (userId === providerId) {
      throw boomify(409, "You can't hire you self.");
    }

    const { rowCount } = await isAlreadyHeired({
      userId,
      providerId,
    });
    if (rowCount !== 0) {
      throw boomify(409, 'You are already heir him/her');
    }

    await addOrderRequest({
      userId,
      ...req.body,
    });
    sendNotification(userId, providerId, 'addOrderReq');

    res.status(201).json({
      statusCode: 201,
      message: 'Order request sent successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userOrderRequest;
