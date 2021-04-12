const router = require('express').Router();

const {
  getPendingOrderRequestController,
  updateAvailabilityController,
  postOrderController,
  getAcceptedOrdersController,
  providerDataController,
  updateOrderStateController,
} = require('../controller');

router.get('/provider/information', providerDataController);
router.get('/provider/order-requests', getPendingOrderRequestController);
router.patch('/provider/availability', updateAvailabilityController);

const {
  orderAcceptValidation,
  updateOrderStateValidation,
} = require('../middleware/validation');

router.get('/provider/order-requests', getPendingOrderRequestController);
router.get('/provider/orders', getAcceptedOrdersController);
router.post('/provider/orders', orderAcceptValidation, postOrderController);
router.patch(
  '/provider/orders/:orderId',
  updateOrderStateValidation,
  updateOrderStateController
);

module.exports = router;
