const { clientError, serverError } = require('./error');
const { loginController, logoutController } = require('./user');
const { providersListController } = require('./provider');

module.exports = {
  clientError,
  serverError,
  loginController,
  logoutController,
  providersListController,
};
