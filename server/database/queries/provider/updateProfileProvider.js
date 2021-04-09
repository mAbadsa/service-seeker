const connection = require('../connection');

const updateProfileProviders = (users, providers) => {
  const sql = {
    text:
      'UPDATE users.location,providers.bio,providers.price_hour,providers.cover_image,providers.title FROM users INNER JOIN providers ON users.id = providers.user_id ',
    values: [users, providers],
  };
  return connection.query(sql);
};

module.exports = updateProfileProviders;
