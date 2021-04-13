const {
  getPendingOrderRequest,
  getProviderDataById,
} = require('../../database/queries');

const getPendingOrderRequestController = async (req, res, next) => {
  try {
    const { id: providerId } = req.user;
    const { rows: provider } = await getProviderDataById({ id: providerId });
    const { rows } = await getPendingOrderRequest(provider[0].id);

    res.json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPendingOrderRequestController;
