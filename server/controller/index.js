const { clientError, serverError } = require('./error');
const { providersListController, getOrderRequest } = require('./provider');
const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
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
  getUserOrdersReqController,
};
