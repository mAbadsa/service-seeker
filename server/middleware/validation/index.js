const signupValidation = require('./signup');
const loginValidation = require('./login');
const orderAcceptValidation = require('./orderProviderAccept');
const orderRequestValidation = require('./orderRequest');
const updateProviderValidation = require('./updateProviderValidation');
const updateOrderStateValidation = require('./updateOrderState');

module.exports = {
  signupValidation,
  loginValidation,
  orderAcceptValidation,
  orderRequestValidation,
  updateProviderValidation,
  updateOrderStateValidation,
};
