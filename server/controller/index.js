const { clientError, serverError } = require('./error');
const {
  providersListController,
  getPendingOrderRequestController,
} = require('./provider');
const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
  deleteOrderReqController,
  userOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
} = require('./user');

module.exports = {
  clientError,
  serverError,
  signupController,
  loginController,
  isAuthController,
  logoutController,
  providersListController,
  getPendingOrderRequestController,
  deleteOrderReqController,
  userOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
};
