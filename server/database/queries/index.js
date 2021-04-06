const {
  createNewUser,
  checkUserByEmail,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  deleteOrder,
} = require('./user');
const { createNewProvider } = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  deleteOrder,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
};
