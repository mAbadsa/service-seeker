const router = require('express').Router();

const {
  getPendingOrderRequestController,
  getAcceptedOrdersController,
} = require('../controller');

router.get('/provider/order-requests', getPendingOrderRequestController);
router.get('/provider/orders', getAcceptedOrdersController);

module.exports = router;
