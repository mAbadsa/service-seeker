const connection = require('../../../config/connection');

const updateFinish = (state, duration, resources, bill, orderId) => {
  const sql = {
    text:
      'UPDATE orders SET state = $1, hour_number = $2, resources_price = $3, total_bill_price = $4 WHERE id = $5 ;',
    values: [state, duration, resources, bill, orderId],
  };

  return connection.query(sql);
};

module.exports = updateFinish;
