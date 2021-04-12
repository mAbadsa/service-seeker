const { updateProfileProviders } = require('../../database/queries/provider');

const updateProfileProviderController = async (req, res, next) => {
  try {
    const { id } = req.user;

    await updateProfileProviders({ ...req.body, id });

    res.json({
      status: 200,
      message: 'Update successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProfileProviderController;
