const connection = require('../../config/connection');

const getOrderReqByOrderId = ({ orderId, providerId }) => {
  const sql = {
    text:
      'SELECT orders_request.provider_id, orders_request.user_id, orders.id ,orders.orders_request_id ,orders.state ,orders.hour_number, orders.start_date, orders.paused_date FROM orders INNER JOIN orders_request ON orders_request.id = orders.orders_request_id WHERE orders.id = $1 AND orders_request.provider_id = $2;',
    values: [orderId, providerId],
  };

  return connection.query(sql);
};

module.exports = getOrderReqByOrderId;
