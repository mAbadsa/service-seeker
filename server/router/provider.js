const router = require('express').Router();

const {
  getPendingOrderRequestController,
  postOrderController,
  getAcceptedOrdersController,
} = require('../controller');
const { orderAcceptValidation } = require('../middleware/validation');

router.get('/provider/order-requests', getPendingOrderRequestController);
router.post('/provider/orders', orderAcceptValidation, postOrderController);
router.get('/provider/orders', getAcceptedOrdersController);

module.exports = router;
