const router = require('express').Router();

const { loginValidation } = require('../middleware/validation');

const { loginController } = require('../controller');

router.post('/login', loginValidation, loginController);

module.exports = router;
