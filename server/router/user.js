const router = require('express').Router();

const { isAuthHandler } = require('../controller/user');

router.get('/is-auth', isAuthHandler);

module.exports = router;
