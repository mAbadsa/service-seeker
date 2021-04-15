const connection = require('../../../config/connection');

const updateStart = (state, startTime, orderId) => {
  const sql = {
    text: 'UPDATE orders SET state = $1, start_date = $2 WHERE id = $3 ;',
    values: [state, startTime, orderId],
  };

  return connection.query(sql);
};

module.exports = updateStart;
