const router = require('express').Router();

// test route
router.get('/', (req, res) => {
  res
    .json({ message: 'The server is running.' });
});

module.exports = router;
