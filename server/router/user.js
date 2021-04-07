const router = require('express').Router();

const { orderRequestValidation } = require('../middleware/validation');
const {
  isAuthController,
  userOrderRequest,
  getUserOrdersReqController,
  getUserOrdersController,
  deleteOrderReqController,
} = require('../controller');

router.get('/is-auth', isAuthController);
// user order request endpoints
router.get('/user/order-requests', getUserOrdersReqController);
router.post('/user/order-requests', orderRequestValidation, userOrderRequest);
// user orders
router.get('/user/order-requests', getUserOrdersReqController);
router.get('/user/orders', getUserOrdersController);
router.delete('/user/order-requests/:orderReqId', deleteOrderReqController);

module.exports = router;
