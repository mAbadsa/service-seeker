const connection = require('../../config/connection');

const getOrderRequestQuery = (providerId) => {
  const sql = {
    text: `SELECT orequest.id, orequest.provider_id, u.username, u.avatar, u.location, u.mobile, orequest.description, 
      orequest.date, orequest.state 
      FROM orders_request AS orequest 
      INNER JOIN users AS u ON orequest.user_id = u.id 
      WHERE orequest.provider_id = $1 AND orequest.state = 'pending';`,
    values: [providerId],
  };
  return connection.query(sql);
};

module.exports = getOrderRequestQuery;
