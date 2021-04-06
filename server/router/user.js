const router = require('express').Router();

const {
  isAuthController,
  getUserOrdersReqController,
  deleteOrderController,
} = require('../controller');

router.get('/is-auth', isAuthController);
router.delete('/user/order-requests/:orderReqId', deleteOrderController);

router.get('/user/order-requests', getUserOrdersReqController);

module.exports = router;
