const router = require('express').Router();

const {
  getPendingOrderRequestController,
  updateAvailabilityController,
  postOrderController,
  getAcceptedOrdersController,
  providerDataController,
  updateProviderController,
  updateCoverImageController,
} = require('../controller');

const {
  orderAcceptValidation,
  profileValidation,
  updateCoverImageValidation,
} = require('../middleware/validation');

router.get('/provider/information', providerDataController);

router.patch(
  '/provider/information',
  profileValidation,
  updateProviderController
);

router.patch('/provider/availability', updateAvailabilityController);
router.patch(
  '/provider/cover-image',
  updateCoverImageValidation,
  updateCoverImageController
);

router.get('/provider/order-requests', getPendingOrderRequestController);

router.post('/provider/orders', orderAcceptValidation, postOrderController);
router.get('/provider/orders', getAcceptedOrdersController);

module.exports = router;
