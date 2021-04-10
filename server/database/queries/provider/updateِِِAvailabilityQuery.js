const connection = require('../../config/connection');

const updateِِِAvailabilityQuery = (id) => {
  const sql = {
    text:
      'UPDATE providers SET availability = NOT availability WHERE id=$1 AND title IS NOT NULL returning *',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = updateِِِAvailabilityQuery;
