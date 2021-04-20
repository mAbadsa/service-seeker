const connection = require('../../../config/connection');

const updatePause = (duration, orderId) => {
  const sql = {
    text:
      "UPDATE orders SET state = 'Paused', paused_date = (NOW()), hour_number = $1 WHERE id = $2 ;",
    values: [duration, orderId],
  };

  return connection.query(sql);
};

module.exports = updatePause;
