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
  getOrderByUserID,
} = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  acceptOrder,
  updateStateOrderRequest,
  getOrderByUserID,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
};
