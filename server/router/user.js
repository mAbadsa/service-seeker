const router = require('express').Router();

const { isAuthController, getUserOrdersController } = require('../controller');

router.get('/is-auth', isAuthController);

router.get('/user/orders', getUserOrdersController);

module.exports = router;
