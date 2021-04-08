const signupValidation = require('./signup');
const loginValidation = require('./login');
const orderAcceptValidation = require('./orderProviderAccept');
const orderRequestValidation = require('./orderRequest');

module.exports = {
  signupValidation,
  loginValidation,
  orderAcceptValidation,
  orderRequestValidation,
};
