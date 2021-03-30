const router = require('express').Router();

const { loginValidation } = require('../middleware/validation');

const {
  loginController,
  logoutController,
  providersListController,
} = require('../controller');

router.post('/login', loginValidation, loginController);
router.get('/logout', logoutController);

router.get('/providers', providersListController);

module.exports = router;
