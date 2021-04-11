const connection = require('../../config/connection');

const updateProfileProviders = (
  title,
  bio,
  price_hour,
  cover_image,
  service_type,
  id
) => {
  const sql = {
    text:
      'UPDATE providers SET title=COALESCE($1,title),bio=COALESCE($2,bio),price_hour= COALESCE($3,price_hour),cover_image=COALESCE($4,cover_image),service_type=COALESCE($5,service_type) WHERE id=$6 returning * ',
    values: [title, bio, price_hour, cover_image, service_type, id],
  };
  return connection.query(sql);
};

module.exports = updateProfileProviders;
