const connection = require('../../config/connection');

const addOrderRequest = ({ id, providerId, description }) => {
  const sql = {
    text:
      'INSERT INTO ordes_request (user_id, provider_id, decription) VALUES ($1, $2, $3);',
    values: [id, providerId, description],
  };

  return connection.query(sql);
};

module.exports = addOrderRequest;
