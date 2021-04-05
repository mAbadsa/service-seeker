const connection = require('../../config/connection');

const acceptOrder = (arriveTime, ordersRequestId, state) => {
  const sql = {
    text:
      'INSERT INTO orders (ordes_request_id, state, arrive_time) VALUES ($1, $2, $3)',
    values: [ordersRequestId, state, arriveTime],
  };

  return connection.query(sql);
};

module.exports = acceptOrder;
