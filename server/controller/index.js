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
};
