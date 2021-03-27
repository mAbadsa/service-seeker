const router = require('express').Router();

const { userProtect } = require('../middleware/auth');
const publicRoutes = require('./publicRoutes');
const user = require('./user');

router.use(publicRoutes);
router.use(userProtect);
router.use(user);

module.exports = router;
