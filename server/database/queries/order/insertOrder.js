const connection = require('../../config/connection');

const postOrder = (arriveTime, ordersRequestId) => {
  const sql = {
    text: 'INSERT INTO orders (orders_request_id, arrive_time) VALUES ($1, $2)',
    values: [ordersRequestId, arriveTime],
  };

  return connection.query(sql);
};

module.exports = postOrder;
