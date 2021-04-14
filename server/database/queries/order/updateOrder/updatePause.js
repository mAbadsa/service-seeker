const connection = require('../../../config/connection');

const updateOrderStatePauseQuery = (orderId, newValue) => {
  const sql = {
    text: 'UPDATE orders SET paused_date = $1 WHERE id = $2 ;',
    values: [newValue, orderId],
  };

  return connection.query(sql);
};

module.exports = updateOrderStatePauseQuery;
