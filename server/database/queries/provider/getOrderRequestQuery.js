const connection = require('../../config/connection');

const getOrderRequestQuery = (providerId) => {
  const sql = {
    text:
      'SELECT description, state, date FROM ordes_request WHERE provider_id = $1;',
    values: [providerId],
  };
  return connection.query(sql);
};

module.exports = getOrderRequestQuery;
