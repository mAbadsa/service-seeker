const connection = require('../../config/connection');

const deleteOrder = (orderReqId) => {
  const sql = {
    text: 'DELETE FROM ordes_request WHERE id=$1;',
    values: [orderReqId],
  };

  return connection.query(sql);
};

module.exports = deleteOrder;
