const router = require('express').Router();

const { orderRequestValidation } = require('../middleware/validation');
const {
  isAuthController,
  userOrderReguest,
  getUserOrdersReqController,
  getUserOrdersController,
} = require('../controller');

router.get('/is-auth', isAuthController);
router.post('/user/order-request', orderRequestValidation, userOrderReguest);

// user orders
router.get('/user/order-requests', getUserOrdersReqController);
router.get('/user/orders', getUserOrdersController);

module.exports = router;
