const router = require('express').Router();

const { getAcceptedOrdersController } = require('../controller');

router.get('/provider/orders/accepted', getAcceptedOrdersController);

module.exports = router;
