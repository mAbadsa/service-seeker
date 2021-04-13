const {
  createNewUser,
  checkUserByEmail,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
} = require('./user');

const {
  createNewProvider,
  updateProvider,
  getProviderDataById,
} = require('./provider');

const {
  getPendingOrderRequest,
  getAcceptedOrders,
  postOrder,
  updateStateOrderRequest,
  deleteOrderReq,
  addOrderRequest,
  isAlreadyHeired,
} = require('./order');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  postOrder,
  updateStateOrderRequest,
  getPendingOrderRequest,
  deleteOrderReq,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  getAcceptedOrders,
  updateProvider,
  getProviderDataById,
  isAlreadyHeired,
};
