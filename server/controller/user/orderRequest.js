const { addOrderRequest } = require('../../database/queries');

const userOrderReguest = async (req, res, next) => {
  try {
    const {
      body: { providerId, description },
      user: { id, role },
    } = req;

    await addOrderRequest({
      providerId,
      description,
      role,
      id,
    });

    res.status(201).json({
      status: 201,
      message: 'Order sent successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userOrderReguest;
