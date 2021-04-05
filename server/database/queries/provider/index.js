const getAllProviders = require('./getAllProvider');
const createNewProvider = require('./createNewProvider');
const getOrderByUserID = require('./getOrderProvider');
const updateStateOrderRequest = require('./changeStateOrderRequest');
const acceptOrder = require('./acceptOrder');

module.exports = {
  getAllProviders,
  createNewProvider,
  getOrderByUserID,
  updateStateOrderRequest,
  acceptOrder,
};
