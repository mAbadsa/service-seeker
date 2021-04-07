const connection = require('../../config/connection');

const addOrderRequest = ({ userId, providerId, description }) => {
  const sql = {
    text:
      'INSERT INTO orders_request (user_id, provider_id, decription) VALUES ($1, $2, $3);',
    values: [userId, providerId, description],
  };

  return connection.query(sql);
};

module.exports = addOrderRequest;
