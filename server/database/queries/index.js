const {
  createNewUser,
  checkUserByEmail,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  getUserData,
  getUserNotificationsQueries,
  addUserNotification,
} = require('./user');
const {
  createNewProvider,
  updateProvider,
  getProviderDataById,
} = require('./provider');

const {
  deleteOrderReq,
  addOrderRequest,
  isAlreadyHeired,
  getAcceptedOrders,
  updateStateOrderRequest,
  postOrder,
  getPendingOrderRequest,
  getOrderReqByOrderIdQuery,
  getOrder,
  updateFinish,
  updatePause,
  updateStart,
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
  getOrderReqByOrderIdQuery,
  getUserData,
  getUserNotificationsQueries,
  addUserNotification,
  getOrder,
  updateFinish,
  updatePause,
  updateStart,
};
