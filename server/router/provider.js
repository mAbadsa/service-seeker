const router = require('express').Router();

const {
  getPendingOrderRequestController,
  updateAvailabilityController,
  postOrderController,
  getAcceptedOrdersController,
  providerDataController,
} = require('../controller');

router.get('/provider/:id', providerDataController);
router.get('/provider/order-requests', getPendingOrderRequestController);
router.patch('/provider/availability', updateAvailabilityController);

const { orderAcceptValidation } = require('../middleware/validation');

router.get('/provider/order-requests', getPendingOrderRequestController);
router.post('/provider/orders', orderAcceptValidation, postOrderController);
router.get('/provider/orders', getAcceptedOrdersController);

module.exports = router;
