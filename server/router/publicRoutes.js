const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'The server is running.' });
});

module.exports = router;
