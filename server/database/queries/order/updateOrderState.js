const connection = require('../../config/connection');

const updateOrderStateQuery = ({ orderId, newData }) => {
  let sqlValue = '';
  let sqlSet = '';
  const values = [orderId];

  Object.keys(newData).forEach((key) => {
    sqlValue += `${key}, `;
    values.push(newData[key]);
    sqlSet += `$${values.length}, `;
  });

  sqlValue = sqlValue.slice(0, -2);
  sqlSet = sqlSet.slice(0, -2);
  const sql = {
    text: `UPDATE Orders SET (${sqlValue}) = (${sqlSet}) WHERE id = $1 ;`,
    values,
  };

  return connection.query(sql);
};

module.exports = updateOrderStateQuery;
