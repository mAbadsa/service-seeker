const connection = require('../../../config/connection');

const updateStart = (state, orderId) => {
  const sql = {
    text: 'UPDATE orders SET state = $1, start_date = (NOW())) WHERE id = $3 ;',
    values: [state, orderId],
  };

  return connection.query(sql);
};

module.exports = updateStart;
