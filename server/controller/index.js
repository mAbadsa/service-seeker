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
  acceptOrderController,
  getUserOrdersController,
  getUserOrdersReqController,
};
