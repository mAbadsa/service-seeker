const connection = require('../../config/connection');

const getPendingOrderRequest = (providerId) => {
  const sql = {
    text:
      "SELECT users.id AS user_id, users.username, users.avatar, users.location, users.mobile, orders_request.id, orders_request.description, orders_request.date, orders_request.state FROM orders_request INNER JOIN users ON orders_request.user_id = users.id WHERE orders_request.provider_id = $1 AND orders_request.state = 'pending' ORDER BY orders_request.id DESC;",
    values: [providerId],
  };
  return connection.query(sql);
};

module.exports = getPendingOrderRequest;
