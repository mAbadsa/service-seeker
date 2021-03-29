const router = require('express').Router();
const { signupController, loginController } = require('../controller');
const {
  signupValidation,
  loginValidation,
} = require('../middleware/validation');

router.post('/login', loginValidation, loginController);

router.post('/signup', signupValidation, signupController);

module.exports = router;
