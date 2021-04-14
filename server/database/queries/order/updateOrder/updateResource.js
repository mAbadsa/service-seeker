const connection = require('../../../config/connection');

const updateOrderResourceQuery = (orderId, newValue) => {
  const sql = {
    text: 'UPDATE orders SET resources_price = $1 WHERE id = $2 ;',
    values: [newValue, orderId],
  };

  return connection.query(sql);
};

module.exports = updateOrderResourceQuery;
