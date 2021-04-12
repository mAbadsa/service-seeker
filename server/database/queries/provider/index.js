const getAllProviders = require('./getAllProvider');
const createNewProvider = require('./createNewProvider');
const updateِِِAvailabilityQuery = require('./updateِِِAvailabilityQuery');
const getAcceptedOrders = require('./getAcceptOrders');
const updateStateOrderRequest = require('./updateStateOrderReq');
const postOrder = require('./insertOrder');
const getPendingOrderRequest = require('./getPendingOrderRequest');
const updateProvider = require('./updateProvider');
const getProviderDataById = require('./getProviderById');

module.exports = {
  getAllProviders,
  createNewProvider,
  updateِِِAvailabilityQuery,
  getAcceptedOrders,
  updateStateOrderRequest,
  postOrder,
  getPendingOrderRequest,
  updateProvider,
  getProviderDataById,
};
