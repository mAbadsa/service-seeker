const { getAcceptedOrders } = require('../../database/queries');
const { boomify } = require('../../utils');

const getAcceptedOrdersController = async (req, res, next) => {
  const { id: providerID, role } = req.user;

  try {
    if (role === 'user') {
      throw boomify(401, 'unauthorized');
    }

    const { rows } = await getAcceptedOrders(providerID);

    res.json({ statusCode: 200, data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = getAcceptedOrdersController;
