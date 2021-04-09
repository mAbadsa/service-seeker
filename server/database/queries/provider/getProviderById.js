const connection = require('../../config/connection');

const getProviderDataById = ({ id }) => {
  const sql = {
    text: 'SELECT * FROM providers WHERE id = $1;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getProviderDataById;
