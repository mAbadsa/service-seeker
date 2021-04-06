const connection = require('../../config/connection');

const getUserOrders = ({ userId }) => {
  const sql = {
    text:
      "SELECT orders_request.description, orders_request.date, users.username, users.mobile, users.avatar, users.location, providers.title, providers.bio, providers.price_hour, providers.price_hour, providers.rating, providers.cover_image, orders.id, orders.state, orders.arrive_time FROM orders_request INNER JOIN users ON orders_request.provider_id = users.id INNER JOIN providers ON orders_request.provider_id = providers.user_id INNER JOIN orders ON orders_request.id = orders.orders_request_id WHERE orders_request.user_id = $1 AND orders_request.state='accepted';",
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserOrders;
