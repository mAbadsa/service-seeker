const signupController = require('./signup');
const loginController = require('./login');
const isAuthController = require('./isAuth');
const logoutController = require('./logout');
const getUserNotificationsController = require('./getUserNotifications');

module.exports = {
  signupController,
  loginController,
  isAuthController,
  logoutController,
  getUserNotificationsController,
};
