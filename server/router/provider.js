const router = require('express').Router();

const { getOrderRequest } = require('../controller');

router.get('/provider/orders', getOrderRequest);

module.exports = router;
