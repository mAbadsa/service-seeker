const router = require('express').Router();

const {
  getPendingOrderRequestController,
  updateAvailabilityController,
  postOrderController,
  getAcceptedOrdersController,
  providerDataController,
  updateProfileProviderController,
} = require('../controller');

const {
  orderAcceptValidation,
  profileValidation,
} = require('../middleware/validation');

router.get('/provider/information', providerDataController);
router.get('/provider/order-requests', getPendingOrderRequestController);
router.patch('/provider/availability', updateAvailabilityController);
router.patch(
  '/provider/profile',
  profileValidation,
  updateProfileProviderController
);

router.get('/provider/order-requests', getPendingOrderRequestController);
router.post('/provider/orders', orderAcceptValidation, postOrderController);
router.get('/provider/orders', getAcceptedOrdersController);

module.exports = router;
