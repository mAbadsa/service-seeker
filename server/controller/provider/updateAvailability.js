const {
  updateِِِAvailabilityQuery,
} = require('../../database/queries/provider');

const updateAvailability = async (req, res, next) => {
  try {
    const { rowCount } = await updateِِِAvailabilityQuery(req.user.id);
    if (rowCount) {
      res.json({
        statusCode: 200,
        massage: 'switch sucssefuly',
      });
    } else {
      res.status(204).json({
        statusCode: 204,
        massage: 'you must complete your profile',
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateAvailability;
