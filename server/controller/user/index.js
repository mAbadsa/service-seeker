const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const deleteOrderController = require('./deleteOrderRequest');
const getUserOrdersController = require('./getUserOrders');
const getUserOrdersReqController = require('./getUserOrdersReq');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  deleteOrderController,
  getUserOrdersController,
  getUserOrdersReqController,
};
