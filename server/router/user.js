const router = require('express').Router();

const { orderRequestValidation } = require('../middleware/validation');
const {
  isAuthController,
  addUserOrderRequest,
  getUserOrdersReqController,
  getUserOrdersController,
  deleteOrderReqController,
  getUserNotificationsController,
} = require('../controller');

router.get('/is-auth', isAuthController);
// user order request endpoints
router.get('/user/order-requests', getUserOrdersReqController);
router.post(
  '/user/order-requests',
  orderRequestValidation,
  addUserOrderRequest
);
router.delete('/user/order-requests/:orderReqId', deleteOrderReqController);
// user order endpoints
router.get('/user/orders', getUserOrdersController);
// User Notifications
router.get('/user/notifications', getUserNotificationsController);

module.exports = router;
