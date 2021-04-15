const connection = require('../../config/connection');

const updateOrderQuery = (colName, colValue, orderId) => {
  const sql = {
    text: `UPDATE orders SET ${colName} = $1 WHERE id = $2 ;`,
    values: [colValue, orderId],
  };

  return connection.query(sql);
};

module.exports = updateOrderQuery;
