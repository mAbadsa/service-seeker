const { getAcceptedOrders } = require('../../database/queries');

const getAcceptedOrdersController = async (req, res, next) => {
  const { id: providerID } = req.user;
  console.log(providerID);

  try {
    const { rows } = await getAcceptedOrders(providerID);
    console.log(rows);

    res.json({ statusCode: 200, data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = getAcceptedOrdersController;
