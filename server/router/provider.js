const router = require('express').Router();

const {
  getPendingOrderRequestController,
  updateAvailabilityController,
  postOrderController,
  getAcceptedOrdersController,
  providerDataController,
  updateProviderController,
} = require('../controller');

const {
  orderAcceptValidation,
  updateProviderValidation,
} = require('../middleware/validation');

router.get('/provider/information', providerDataController);
router.patch(
  '/provider/information',
  updateProviderValidation,
  updateProviderController
);
router.patch('/provider/availability', updateAvailabilityController);

router.get('/provider/order-requests', getPendingOrderRequestController);

router.post('/provider/orders', orderAcceptValidation, postOrderController);
router.get('/provider/orders', getAcceptedOrdersController);

module.exports = router;
