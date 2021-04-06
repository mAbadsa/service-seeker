const {
  createNewUser,
  checkUserByEmail,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
} = require('./user');
const {
  createNewProvider,
  acceptOrder,
  updateStateOrderRequest,
} = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  acceptOrder,
  updateStateOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
};
