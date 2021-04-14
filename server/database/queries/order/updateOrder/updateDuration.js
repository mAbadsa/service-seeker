const connection = require('../../../config/connection');

const updateOrderDurationQuery = (orderId, newValue) => {
  const sql = {
    text: 'UPDATE orders SET hour_number = $1 WHERE id = $2 ;',
    values: [newValue, orderId],
  };

  return connection.query(sql);
};

module.exports = updateOrderDurationQuery;
