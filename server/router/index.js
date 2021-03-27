const router = require('express').Router();
const publicRouter = require('./publicRoutes');

router.use(publicRouter);

module.exports = router;
