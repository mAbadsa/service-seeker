const { clientError, serverError } = require('./error');
const {
  providersListController,
  getAcceptedOrdersController,
  getPendingOrderRequestController,
  postOrderController,
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
  postOrderController,
  getPendingOrderRequestController,
  deleteOrderReqController,
  userOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
  getAcceptedOrdersController,
};
