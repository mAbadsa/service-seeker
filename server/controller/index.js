const { clientError, serverError } = require('./error');
const { providersListController } = require('./provider');
const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
  userOrderReguest,
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
  userOrderReguest,
  getUserOrdersReqController,
};
