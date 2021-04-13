const {
  getAcceptedOrders,
  getProviderDataById,
} = require('../../database/queries');

const getAcceptedOrdersController = async (req, res, next) => {
  const { id: providerID } = req.user;

  try {
    const { rows: provider } = await getProviderDataById({ id: providerID });

    const { rows } = await getAcceptedOrders(provider[0].id);

    res.json({ statusCode: 200, data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = getAcceptedOrdersController;
