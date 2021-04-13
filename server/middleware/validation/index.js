const signupValidation = require('./signup');
const loginValidation = require('./login');
const orderAcceptValidation = require('./orderProviderAccept');
const orderRequestValidation = require('./orderRequest');
const updateOrderStateValidation = require('./updateOrderState');
const profileValidation = require('./profileUpdateValidation');

module.exports = {
  signupValidation,
  loginValidation,
  orderAcceptValidation,
  orderRequestValidation,
  updateOrderStateValidation,
  profileValidation,
};
