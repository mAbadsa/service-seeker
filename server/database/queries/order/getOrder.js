const connection = require('../../config/connection');

const getOrder = (orderId) => {
  const sql = {
    text: 'SELECT * FROM orders WHERE id = $1 ;',
    values: [orderId],
  };

  return connection.query(sql);
};

module.exports = getOrder;
