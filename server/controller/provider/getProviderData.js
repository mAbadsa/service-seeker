const { getProviderDataById } = require('../../database/queries/provider');

const providerData = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows } = await getProviderDataById({ id });

    res.json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = providerData;
