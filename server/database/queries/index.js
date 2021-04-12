const {
  createNewUser,
  checkUserByEmail,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  deleteOrderReq,
  isAlreadyHeired,
} = require('./user');
const {
  createNewProvider,
  getPendingOrderRequest,
  getAcceptedOrders,
  postOrder,
  updateStateOrderRequest,
  getProviderDataById,
  getOrderReqByOrderIdQuery,
  updateOrderStateQuery,
} = require('./provider');

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
  getProviderDataById,
  isAlreadyHeired,
  updateOrderStateQuery,
  getOrderReqByOrderIdQuery,
};
