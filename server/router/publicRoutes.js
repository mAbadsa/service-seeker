const router = require('express').Router();

const {
  loginValidation,
} = require('../middleware/validation');

const {
  loginHandler,
} = require('../controller/user');

router.post('/login', loginValidation, loginHandler);

module.exports = router;
