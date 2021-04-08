const router = require('express').Router();

const {
  getPendingOrderRequestController,
  postOrderController,
} = require('../controller');
const { orderAcceptValidation } = require('../middleware/validation');

router.get('/provider/order-requests', getPendingOrderRequestController);
router.post('/provider/orders', orderAcceptValidation, postOrderController);

module.exports = router;
