const router = require('express').Router();

const { orderRequestValidation } = require('../middleware/validation');
const {
  isAuthController,
  userOrderReguest,
  getUserOrdersReqController,
} = require('../controller');

router.get('/is-auth', isAuthController);
router.post('/user/order-request', orderRequestValidation, userOrderReguest);

router.get('/user/order-requests', getUserOrdersReqController);

module.exports = router;
