const { token } = require('morgan');
const { verifying } = require('../../utils');

const protectRoute = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { userId } = await verifying(token);
    req.userId = userId;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = protectRoute;
