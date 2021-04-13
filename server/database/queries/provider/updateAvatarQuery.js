const connection = require('../../connection');

const updateAvatarQuery = (userId) => {
  connection.query({
    text: 'UPDATE users SET avatar=$1 WHERE id=$2',
    values: [userId],
  });
};
module.exports = updateAvatarQuery;
