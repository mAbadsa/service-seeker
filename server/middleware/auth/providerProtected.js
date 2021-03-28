const { boomify } = require('../../utils');

const providerProtectRoute = (req, res, next) => {
  if (req.user.role === 'provider') {
    return next();
  }
  return next(boomify(403, 'Unauthorize'));
};

module.exports = providerProtectRoute;
