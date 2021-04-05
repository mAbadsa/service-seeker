const connection = require('../../config/connection');

const updateStateOrderRequest = (orderID) => {
  const sql = {
    text: "UPDATE ordes_request SET state='accepted' WHERE id=$1'",
    values: [orderID],
  };

  return connection.query(sql);
};

module.exports = updateStateOrderRequest;
