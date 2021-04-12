const getAllProviders = require('./getAllProvider');
const createNewProvider = require('./createNewProvider');
const updateِِِAvailabilityQuery = require('./updateِِِAvailabilityQuery');
const getAcceptedOrders = require('./getAcceptOrders');
const updateStateOrderRequest = require('./updateStateOrderReq');
const postOrder = require('./insertOrder');
const getPendingOrderRequest = require('./getPendingOrderRequest');
const getProviderDataById = require('./getProviderById');
const getOrderReqByOrderIdQuery = require('./getOrderReqByOrderId');
const updateOrderStateQuery = require('./updateOrderState');

module.exports = {
  getAllProviders,
  createNewProvider,
  updateِِِAvailabilityQuery,
  getAcceptedOrders,
  updateStateOrderRequest,
  postOrder,
  getPendingOrderRequest,
  getProviderDataById,
  getOrderReqByOrderIdQuery,
  updateOrderStateQuery,
};
