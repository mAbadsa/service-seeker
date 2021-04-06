const {
  createNewUser,
  checkUserByEmail,
  getUserOrdersQuery,
} = require('./user');
const { createNewProvider } = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  getUserOrdersQuery,
};
