const router = require('express').Router();

const publicRoutes = require('./publicRoutes');
const userRoutes = require('./user');

router.use(publicRoutes, userRoutes);

module.exports = router;
