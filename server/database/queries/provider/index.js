const getAllProviders = require('./getAllProvider');
const createNewProvider = require('./createNewProvider');
const getAcceptedOrders = require('./getAcceptOrders');
const updateStateOrderRequest = require('./updateStateOrderReq');
const postOrder = require('./insertOrder');
const getPendingOrderRequest = require('./getPendingOrderRequest');

module.exports = {
  getAllProviders,
  createNewProvider,
  getAcceptedOrders,
  updateStateOrderRequest,
  postOrder,
  getPendingOrderRequest,
};
