const { getAllProviders } = require('../../database/queries/provider');

const providersList = async (req, res, next) => {
  try {
    const { rows } = await getAllProviders();
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = providersList;
