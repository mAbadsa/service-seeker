const { getAcceptedOrders } = require('../../database/queries');

const getAcceptedOrdersController = async (req, res, next) => {
  const { id: providerID } = req.user;

  try {
    const { rows } = await getAcceptedOrders(providerID);

    res.json({ statusCode: 200, data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = getAcceptedOrdersController;
