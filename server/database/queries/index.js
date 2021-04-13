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
  updateCoverImageQuery,
} = require('./provider');

const {
  deleteOrderReq,
  addOrderRequest,
  isAlreadyHeired,
  getAcceptedOrders,
  updateStateOrderRequest,
  postOrder,
  getPendingOrderRequest,
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
  getUserData,
  getUserNotificationsQueries,
  addUserNotification,
  updateCoverImageQuery,
};
