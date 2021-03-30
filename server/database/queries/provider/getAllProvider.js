const connection = require('../../config/connection');

const getAllProviders = () => {
  const sql = {
    text:
      'SELECT * FROM users INNER JOIN providers  ON users.id = providers.user_id   ;',
  };
  return connection.query(sql);
};

module.exports = getAllProviders;
