const router = require('express').Router();

const { isAuthController, acceptOrderController } = require('../controller');
const { orderAcceptValidation } = require('../middleware/validation');

router.get('/is-auth', isAuthController);
router.post('/provider/orders', orderAcceptValidation, acceptOrderController);

module.exports = router;
