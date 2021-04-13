const connection = require('../../config/connection');

const updateStateOrderRequest = (orderID, providerID) => {
  const sql = {
    text:
      "UPDATE orders_request SET state='accepted' WHERE id=$1 AND provider_id=$2 AND state='pending'",
    values: [orderID, providerID],
  };

  return connection.query(sql);
};

module.exports = updateStateOrderRequest;
