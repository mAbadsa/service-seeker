const { createNewUser, checkUserByEmail } = require('./user');
const {
  createNewProvider,
  acceptOrder,
  updateStateOrderRequest,
  getOrderByUserID,
} = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  acceptOrder,
  updateStateOrderRequest,
  getOrderByUserID,
};
