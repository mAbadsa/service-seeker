const connection = require('../../config/connection');

const getAllProvidersById = () => {
  const sql = { text: 'select * from providers ;' };
  return connection.query(sql);
};

module.exports = getAllProvidersById;
