const connection = require('../../config/connection');

const createNewProvider = (id) => {
  const sql = {
    text: 'INSERT INTO providers (user_id) VALUES ($1) RETURNING id;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = createNewProvider;
