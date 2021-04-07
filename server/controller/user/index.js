const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const userOrderRequest = require('./orderRequest');
const getUserOrdersReqController = require('./getUserOrdersReq');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  userOrderRequest,
  getUserOrdersReqController,
};
