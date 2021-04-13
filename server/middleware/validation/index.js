const signupValidation = require('./signup');
const loginValidation = require('./login');
const orderAcceptValidation = require('./orderProviderAccept');
const orderRequestValidation = require('./orderRequest');
const profileValidation = require('./profileUpdateValidation');
const updateCoverImageValidation = require('./updateCoverImage');

module.exports = {
  signupValidation,
  loginValidation,
  orderAcceptValidation,
  orderRequestValidation,
  profileValidation,
  updateCoverImageValidation,
};
