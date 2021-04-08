const providersListController = require('./providersList');
const getPendingOrderRequestController = require('./getPendingOrderRequest');
const getAcceptedOrdersController = require('./getAcceptedOrders');
const postOrderController = require('./postOrder');

module.exports = {
  providersListController,
  getPendingOrderRequestController,
  getAcceptedOrdersController,
  postOrderController,
};
