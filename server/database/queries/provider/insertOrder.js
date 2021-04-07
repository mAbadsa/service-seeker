const connection = require('../../config/connection');

const postOrder = (arriveTime, ordersRequestId, state) => {
  const sql = {
    text:
      'INSERT INTO orders (orders_request_id, state, arrive_time) VALUES ($1, $2, $3)',
    values: [ordersRequestId, state, arriveTime],
  };

  return connection.query(sql);
};

module.exports = postOrder;
