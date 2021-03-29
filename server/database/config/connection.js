const { Pool } = require('pg');

const { DEV_DB_URL, DATABASE_URL, NODE_ENV } = process.env;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  default:
    throw new Error('No Database url!!!');
}

const options = {
  connectionString: dbUrl,
  ssl: false,
};

module.exports = new Pool(options);
