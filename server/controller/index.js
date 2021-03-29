const { clientError, serverError } = require('./error');
const { loginController, signupController } = require('./user');

module.exports = {
  clientError,
  serverError,
  signupController,
  loginController,
};
