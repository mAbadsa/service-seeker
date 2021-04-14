const connection = require('../../../config/connection');

const updateStateQuery = (orderId, state) => {
  const sql = {
    text: 'UPDATE orders SET state = $1 WHERE id = $2 ;',
    values: [state, orderId],
  };

  return connection.query(sql);
};

module.exports = updateStateQuery;
