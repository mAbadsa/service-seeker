const {
  updateِِِAvailabilityQuery,
} = require('../../database/queries/provider');

const { boomify } = require('../../utils');

const updateAvailability = async (req, res, next) => {
  try {
    const { rowCount } = await updateِِِAvailabilityQuery(req.user.id);
    if (rowCount) {
      res.json({
        statusCode: 200,
        massage: 'switch successfully',
      });
    } else {
      throw boomify(400, 'you must complete your profile');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateAvailability;
