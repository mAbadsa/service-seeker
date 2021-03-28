const { token } = require('morgan');
const { verifying, boomify } = require('../../utils');

const protectRoute = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { userId, role } = await verifying(token);
    req.user = { id, role };
    next();
  } catch (error) {
    next(boomify(401, 'Unauthenticated'));
  }
};

module.exports = protectRoute;
