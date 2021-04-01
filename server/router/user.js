const router = require('express').Router();

const { isAuthController, userOrderReguest } = require('../controller/user');

router.get('/is-auth', isAuthController);
router.post('/user/order-request', userOrderReguest);

module.exports = router;
