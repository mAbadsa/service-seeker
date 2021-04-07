const router = require('express').Router();

const { postOrderController } = require('../controller');
const { orderAcceptValidation } = require('../middleware/validation');

router.post('/provider/orders', orderAcceptValidation, postOrderController);

module.exports = router;
