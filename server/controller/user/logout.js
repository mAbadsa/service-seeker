const logoutController = (req, res) => {
  res.clearCookie('token');
  res.json({
    title: 'Logout Successful',
  });
};

module.exports = logoutController;
