const router = require('express').Router();

const {
  getPendingOrderRequestController,
  updateAvailabilityController,
} = require('../controller');

router.get('/provider/order-requests', getPendingOrderRequestController);
router.patch('/provider/availability', updateAvailabilityController);

module.exports = router;
