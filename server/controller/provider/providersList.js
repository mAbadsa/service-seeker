const { getAllProvidersById } = require('../../database/queries/provider');

const providersList = (req, res, next) => {
  getAllProvidersById()
    .then(({ rows }) => res.status(200).json({ status: 200, data: rows }))
    .catch(next);
};

module.exports = providersList;
