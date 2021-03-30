const signupController = require('./userSignup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
};
