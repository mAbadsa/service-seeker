const { clientError, serverError } = require('./error');
const { providersListController, getOrderRequest } = require('./provider');
const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
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
  getOrderRequest,
  userOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
};
