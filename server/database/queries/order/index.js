const addOrderRequest = require('./addOrderRequest');
const deleteOrderReq = require('./deleteOrderReq');
const isAlreadyHeired = require('./isAlreadyHeired');
const getPendingOrderRequest = require('./getPendingOrderRequest');
const postOrder = require('./insertOrder');
const getAcceptedOrders = require('./getAcceptOrders');
const updateStateOrderRequest = require('./updateStateOrderReq');
const getOrderReqByOrderIdQuery = require('./getOrderReqByOrderId');
const getOrder = require('./getOrder');
const {
  updateOrderStateStartQuery,
  updateOrderStatePauseQuery,
  updateStateQuery,
  updateOrderDurationQuery,
  updateOrderBillQuery,
  updateOrderResourceQuery,
} = require('./updateOrder');

module.exports = {
  deleteOrderReq,
  addOrderRequest,
  isAlreadyHeired,
  getAcceptedOrders,
  updateStateOrderRequest,
  postOrder,
  getPendingOrderRequest,
  getOrderReqByOrderIdQuery,
  updateOrderStatePauseQuery,
  updateOrderStateStartQuery,
  updateStateQuery,
  updateOrderDurationQuery,
  updateOrderBillQuery,
  updateOrderResourceQuery,
  getOrder,
};
