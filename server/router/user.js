const router = require('express').Router();

const { isAuthController, userOrderReguest } = require('../controller/user');
const { orderRequestValidation } = require('../middleware/validation');

router.get('/is-auth', isAuthController);
router.post('/user/order-request', orderRequestValidation, userOrderReguest);

module.exports = router;
