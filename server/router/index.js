const router = require('express').Router();

const { userProtect } = require('../middleware/auth');
const publicRouter = require('./publicRoutes');
const user = require('./user');

router.use(publicRouter);
router.use(userProtect);
router.use(user);

module.exports = router;
