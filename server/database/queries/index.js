const { createNewUser, checkUserByEmail } = require('./user');
const { createNewProvider, deleteOrder } = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  deleteOrder,
};
