const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const deleteOrderController = require('./deleteOrder');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  deleteOrderController,
};
