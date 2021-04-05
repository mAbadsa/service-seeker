const router = require('express').Router();

const { isAuthController } = require('../controller/user');
const { deleteOrderController } = require('../controller');

router.get('/is-auth', isAuthController);
router.delete('/user/order-requests/:orderReqId', deleteOrderController);

module.exports = router;
