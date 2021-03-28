const router = require('express').Router();

const { protectRoute } = require('../middleware/auth');
const publicRoutes = require('./publicRoutes');
const user = require('./user');

router.use(publicRoutes);
router.use(protectRoute);
router.use(user);

module.exports = router;
