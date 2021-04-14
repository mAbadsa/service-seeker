const connection = require('../../../config/connection');

const updateOrderStateStartQuery = (orderId, newValue) => {
  const sql = {
    text: 'UPDATE orders SET start_date = $1 WHERE id = $2 ;',
    values: [newValue, orderId],
  };

  return connection.query(sql);
};

module.exports = updateOrderStateStartQuery;
