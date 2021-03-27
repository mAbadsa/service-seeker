const router = require('express').Router();

const {
  loginValidation,
} = require('../middleware/validation');

const {
  loginHandler,
} = require('../controller/user');

router.get('/', (req, res) => {
  res.json({ message: 'The server is running.' });
});
router.post('/login', loginValidation, loginHandler);


module.exports = router;
