const connection = require('../../config/connection');

const createNewUser = ({
  username,
  email,
  password,
  mobile,
  location,
  avatar,
  role,
}) => {
  const sql = {
    text:
      'INSERT INTO users (username, email, password, mobile, location, avatar, role) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, role;',
    values: [username, email, password, mobile, location, avatar, role],
  };
  return connection.query(sql);
};

module.exports = createNewUser;
