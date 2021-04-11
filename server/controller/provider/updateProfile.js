const { updateProfileProviders } = require('../../database/queries/provider');

const { boomify } = require('../../utils');

const updateProfileProviderController = async (req, res, next) => {
  try {
    const {
 title, bio, price_hour, cover_image, service_type, id 
} = req.body;
    const { rows } = await updateProfileProviders(
      title,
      bio,
      price_hour,
      cover_image,
      service_type,
      id
    );
    if (rows) {
      res.json({
        status: 200,
        data: rows,
        message: 'Update successfully',
      });
    } else {
      throw boomify(400, 'you must complete your profile');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateProfileProviderController;
