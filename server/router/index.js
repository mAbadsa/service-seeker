const router = require('express').Router();

const {
  protectMiddleware,
  providerProtectMiddleware,
} = require('../middleware/auth');
const publicRoutes = require('./publicRoutes');
const user = require('./user');
const provider = require('./provider');

// public endpoints
router.use(publicRoutes);
// protect endpoints
router.use(protectMiddleware);
router.use(user);
router.use(providerProtectMiddleware);
router.use(provider);

module.exports = router;
