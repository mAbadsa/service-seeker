const router = require('express').Router();

const {
  isAuthController,
  getUserOrdersReqController,
  getUserOrdersController,
} = require('../controller');

router.get('/is-auth', isAuthController);

router.get('/user/orders', getUserOrdersController);
router.get('/user/order-requests', getUserOrdersReqController);

module.exports = router;
