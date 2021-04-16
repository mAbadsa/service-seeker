const connection = require('../../../config/connection');

const updateStart = (orderId) => {
  const sql = {
    text:
      "UPDATE orders SET state = 'Start', start_date = (NOW()) WHERE id = $1 ;",
    values: [orderId],
  };

  return connection.query(sql);
};

module.exports = updateStart;
