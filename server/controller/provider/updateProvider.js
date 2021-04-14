const { updateProvider } = require('../../database/queries/provider');

const updateProviderController = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(req.body, '1111111111');

    await updateProvider({ ...req.body, id });

    res.json({
      status: 200,
      message: 'Update successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProviderController;
