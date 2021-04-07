const router = require('express').Router();

const { getOrderRequest } = require('../controller');

router.get('/provider/order-requests', getOrderRequest);

module.exports = router;
