const addOrderRequest = require('./addOrderRequest');
const deleteOrderReq = require('./deleteOrderReq');
const isAlreadyHeired = require('./isAlreadyHeired');
const getPendingOrderRequest = require('./getPendingOrderRequest');
const postOrder = require('./insertOrder');
const getAcceptedOrders = require('./getAcceptOrders');
const updateStateOrderRequest = require('./updateStateOrderReq');
const getOrderReqByOrderIdQuery = require('./getOrderReqByOrderId');
const updateOrderStateQuery = require('./updateOrderState');

module.exports = {
  deleteOrderReq,
  addOrderRequest,
  isAlreadyHeired,
  getAcceptedOrders,
  updateStateOrderRequest,
  postOrder,
  getPendingOrderRequest,
  getOrderReqByOrderIdQuery,
  updateOrderStateQuery,
};
