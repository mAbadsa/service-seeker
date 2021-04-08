const router = require('express').Router();

const { getPendingOrderRequestController } = require('../controller');

router.get('/provider/order-requests', getPendingOrderRequestController);

module.exports = router;
