const connection = require('../../config/connection');

const getUserNotifications = ({ userId }) => {
  const sql = {
    text:
      'SELECT id, description, created_at FROM notification WHERE user_id = $1 ORDER BY id DESC;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserNotifications;
