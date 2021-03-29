const router = require('express').Router();
const { userSignup } = require('../controller');
const { signupValidation } = require('../middleware/validation');

const { loginValidation } = require('../middleware/validation');

const { loginController } = require('../controller');

router.post('/login', loginValidation, loginController);

router.post('/signup', signupValidation, userSignup);

module.exports = router;
