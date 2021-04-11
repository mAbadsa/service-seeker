const connection = require('../../config/connection');

const getProviderDataById = ({ id }) => {
  const sql = {
    text: 'SELECT * FROM providers WHERE user_id = $1;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getProviderDataById;
