const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const getUserOrdersController = require('./getUserOrders');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  getUserOrdersController,
};
