const connection = require('../../../config/connection');

const updateOrderRequestState = (orderId) => {
  const sql = {
    text: "UPDATE orders_request SET state = 'finished' WHERE id = $1 ;",
    values: [orderId],
  };

  return connection.query(sql);
};

module.exports = updateOrderRequestState;
