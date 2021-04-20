const connection = require('../../config/connection');

const getPriceHourProvider = (id) => {
  const sql = {
    text: 'SELECT price_hour FROM providers WHERE user_id = $1;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getPriceHourProvider;
