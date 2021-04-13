const connection = require('../../config/connection');

const getAcceptedOrders = (providerID) => {
  const sql = {
    text:
      "SELECT users.id ,users.avatar, users.username, users.mobile, users.location, orders_request.description, orders_request.date, orders.state FROM orders INNER JOIN orders_request ON orders.orders_request_id = orders_request.id INNER JOIN users ON orders_request.user_id = users.id WHERE orders_request.state = 'accepted' AND orders_request.provider_id = $1;",
    values: [providerID],
  };

  return connection.query(sql);
};

module.exports = getAcceptedOrders;
