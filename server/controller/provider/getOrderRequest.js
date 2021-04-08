const { getPendingOrderRequest } = require('../../database/queries');

const getOrderRequest = async (req, res, next) => {
  try {
    const { id: providerId } = req.user;
    const { rows } = await getPendingOrderRequest(providerId);

    res.json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getOrderRequest;
