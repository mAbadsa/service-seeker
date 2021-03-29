const router = require('express').Router();
const { userSignup } = require('../controller');
const { signupValidation } = require('../middleware/validation');

router.get('/', (req, res) => {
  res.json({ message: 'The server is running.' });
});

router.post('/signup', signupValidation, userSignup);

module.exports = router;
