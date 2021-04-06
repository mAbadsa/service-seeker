const connection = require('../../config/connection');

const updateStateOrderRequest = (orderID, providerID) => {
  const sql = {
    text:
      "UPDATE ordes_request SET state='accepted' WHERE id=$1 AND provider_id=$2'",
    values: [orderID, providerID],
  };

  return connection.query(sql);
};

module.exports = updateStateOrderRequest;
