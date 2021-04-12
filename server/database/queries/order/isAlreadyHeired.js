const connection = require('../../config/connection');

const isAlreadyHeired = ({ userId, providerId }) => {
  const sql = {
    text:
      "SELECT id FROM orders_request WHERE user_id = $1 AND provider_id = $2 AND state != 'finished' ;",
    values: [userId, providerId],
  };
  return connection.query(sql);
};

module.exports = isAlreadyHeired;
