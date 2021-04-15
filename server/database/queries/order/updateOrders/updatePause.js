const connection = require('../../../config/connection');

const updatePause = (state, pauseTime, duration, orderId) => {
  const sql = {
    text:
      'UPDATE orders SET state = $1, paused_date = $2, hour_number = $3 WHERE id = $4 ;',
    values: [state, pauseTime, duration, orderId],
  };

  return connection.query(sql);
};

module.exports = updatePause;
