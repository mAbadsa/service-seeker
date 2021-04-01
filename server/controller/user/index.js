const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const userOrderReguest = require('./orderRequest');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  userOrderReguest,
};
