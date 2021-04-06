const { clientError, serverError } = require('./error');
const {
  providersListController,
  acceptOrderController,
} = require('./provider');
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
  acceptOrderController,
  getUserOrdersReqController,
};
