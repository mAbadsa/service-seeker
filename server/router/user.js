const router = require('express').Router();

const { isAuthController } = require('../controller/user');
const { orderAcceptValidation } = require('../middleware/validation');
const { acceptOrderController } = require('../controller');

router.get('/is-auth', isAuthController);
router.post('/provider/orders', orderAcceptValidation, acceptOrderController);

module.exports = router;
