const {
  createNewUser,
  checkUserByEmail,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  deleteOrderReq,
} = require('./user');
const {
  createNewProvider,
  getPendingOrderRequest,
  getAcceptedOrders,
} = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  getPendingOrderRequest,
  deleteOrderReq,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  getAcceptedOrders,
};
