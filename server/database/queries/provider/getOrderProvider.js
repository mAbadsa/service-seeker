const connection = require('../../config/connection');

const getOrderByUserID = (userID, orderID) => {
  const sql = {
    text: 'SELECT * FROM ordes_request WHERE user_id=$1 AND id=$2',
    values: [userID, orderID],
  };

  return connection.query(sql);
};

module.exports = getOrderByUserID;
