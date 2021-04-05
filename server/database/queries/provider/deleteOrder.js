const connection = require('../../config/connection');

const deleteOrder = (orderReqId, userId) => {
  const sql = {
    text:
      "DELETE FROM ordes_request WHERE id=$1 AND state='pending' AND user_id=$2;",
    values: [orderReqId, userId],
  };

  return connection.query(sql);
};

module.exports = deleteOrder;
