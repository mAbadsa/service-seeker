const connection = require('../../config/connection');

const updateProfileProviders = async ({
  title,
  bio,
  price_hour: priceHour,
  service_type: serviceType,
  mobile,
  location,
  id,
}) => {
  try {
    await connection.query('BEGIN TRANSACTION');
    await connection.query({
      text:
        'UPDATE providers SET title=coalesce($1,title),bio=coalesce($2,bio),price_hour=coalesce($3,price_hour),service_type=coalesce($4,service_type) WHERE user_id=$5;',
      values: [title, bio, priceHour, serviceType, id],
    });
    await connection.query({
      text: 'UPDATE users set location=$1 ,mobile=$2 WHERE id=$3 ;',
      values: [location, mobile, id],
    });

    await connection.query('COMMIT');
  } catch (e) {
    await connection.query('ROLLBACK');
    throw e;
  }
};
module.exports = updateProfileProviders;
