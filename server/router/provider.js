const router = require('express').Router();

const { isAuthController, postOrderController } = require('../controller');
const { orderAcceptValidation } = require('../middleware/validation');

router.get('/is-auth', isAuthController);
router.post('/provider/orders', orderAcceptValidation, postOrderController);

module.exports = router;
