const connection = require('../../config/connection');

const updateCoverImageQuery = (url, id) => {
  const sql = {
    text: 'UPDATE providers SET cover_image=$1 WHERE user_id=$2',
    values: [url, id],
  };
  return connection.query(sql);
};
module.exports = updateCoverImageQuery;
