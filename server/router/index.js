const router = require('express').Router();

const { userProtect } = require('../middleware/auth');
const user = require('./user');

router.use(userProtect);
router.use(user);

module.exports = router;
