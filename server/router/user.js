const router = require('express').Router();

const { providersListController } = require('../controller');

router.get('/providers', providersListController);

module.exports = router;
