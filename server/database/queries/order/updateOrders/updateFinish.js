const connection = require('../../../config/connection');

const updateOrderOnFinish = ({ duration, resourcesPrice, bill, orderId }) => {
  const sql = {
    text:
      "UPDATE orders SET state = 'Finished', hour_number = $1, resources_price = $2, total_bill_price = $3 WHERE id = $4 ;",
    values: [duration, resourcesPrice, bill, orderId],
  };

  return connection.query(sql);
};

module.exports = updateOrderOnFinish;
