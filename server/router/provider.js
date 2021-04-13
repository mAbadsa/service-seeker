const router = require('express').Router();

const {
  getPendingOrderRequestController,
  updateAvailabilityController,
  postOrderController,
  getAcceptedOrdersController,
  providerDataController,
  updateOrderStateController,
  updateProviderController,
} = require('../controller');

const {
  orderAcceptValidation,
  profileValidation,
  updateOrderStateValidation,
} = require('../middleware/validation');

router.get('/provider/information', providerDataController);
router.patch(
  '/provider/information',
  profileValidation,
  updateProviderController
);
router.patch('/provider/availability', updateAvailabilityController);
router.get('/provider/order-requests', getPendingOrderRequestController);
router.get('/provider/order-requests', getPendingOrderRequestController);

router.get('/provider/orders', getAcceptedOrdersController);
router.post('/provider/orders', orderAcceptValidation, postOrderController);
router.patch(
  '/provider/orders/:orderId',
  updateOrderStateValidation,
  updateOrderStateController
);

module.exports = router;
