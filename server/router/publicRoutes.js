const router = require('express').Router();

const { loginValidation } = require('../middleware/validation');

const { loginController, logoutController } = require('../controller');

router.post('/login', loginValidation, loginController);
router.get('/logout', logoutController);

module.exports = router;
