const connection = require('../../connection');

const updateCoverImageQuery = (coverImage, id) => {
  connection.query({
    text: 'UPDATE providers SET cover_image=$1 WHERE id=$2',
    values: [coverImage, id],
  });
};
module.exports = updateCoverImageQuery;
