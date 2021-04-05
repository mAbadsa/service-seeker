const { createNewUser, checkUserByEmail, deleteOrder } = require('./user');
const { createNewProvider } = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  deleteOrder,
};
