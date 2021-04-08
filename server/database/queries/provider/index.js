const getAllProviders = require('./getAllProvider');
const createNewProvider = require('./createNewProvider');
const updateStateOrderRequest = require('./updateStateOrderReq');
const postOrder = require('./insertOrder');
const getPendingOrderRequest = require('./getPendingOrderRequest');

module.exports = {
  getAllProviders,
  createNewProvider,
  updateStateOrderRequest,
  postOrder,
  getPendingOrderRequest,
};
