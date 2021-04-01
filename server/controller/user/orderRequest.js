const userOrderReguest = (req, res, next) => {
  try {
    res.status(201).json({
      status: 201,
      message: 'Order sent successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userOrderReguest;
