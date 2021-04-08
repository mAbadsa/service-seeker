const {
  createNewUser,
  checkUserByEmail,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  deleteOrderReq,
} = require('./user');
const { createNewProvider, getPendingOrderRequest } = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  getPendingOrderRequest,
  deleteOrderReq,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
};
