const connection = require('../../../config/connection');

const updateOrderBillQuery = (orderId, newValue) => {
  const sql = {
    text: 'UPDATE orders SET total_bill_price = $1 WHERE id = $2 ;',
    values: [newValue, orderId],
  };

  return connection.query(sql);
};

module.exports = updateOrderBillQuery;
