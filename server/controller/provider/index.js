const providersListController = require('./providersList');
const updateAvailabilityController = require('./updateAvailability');
const getPendingOrderRequestController = require('./getPendingOrderRequest');
const getAcceptedOrdersController = require('./getAcceptedOrders');
const postOrderController = require('./postOrder');
const providerDataController = require('./getProviderData');
const updateOrderStateController = require('./updateOrderState');

module.exports = {
  providersListController,
  updateAvailabilityController,
  getPendingOrderRequestController,
  getAcceptedOrdersController,
  postOrderController,
  providerDataController,
  updateOrderStateController,
};
