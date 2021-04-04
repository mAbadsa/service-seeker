const { addOrderRequest } = require('../../database/queries');

const userOrderReguest = async (req, res, next) => {
  try {
    const {
      body: { providerId, description },
      user: { id },
    } = req;

    await addOrderRequest({
      providerId,
      description,
      id,
    });

    res.status(200).json({
      status: 200,
      message: 'Order request sent successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userOrderReguest;
