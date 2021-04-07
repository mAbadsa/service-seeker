const router = require('express').Router();

const {
  isAuthController,
  getUserOrdersReqController,
  getUserOrdersController,
  deleteOrderReqController,
} = require('../controller');

router.get('/is-auth', isAuthController);
// user orders
router.get('/user/order-requests', getUserOrdersReqController);
router.get('/user/orders', getUserOrdersController);
router.delete('/user/order-requests/:orderReqId', deleteOrderReqController);

module.exports = router;
