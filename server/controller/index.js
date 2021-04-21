const { clientError, serverError } = require('./error');
const {
  providersListController,
  updateAvailabilityController,
  providerDataController,
  updateProviderController,
  updateCoverImageController,
} = require('./provider');
const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
  getUserNotificationsController,
} = require('./user');
const {
  getPendingOrderRequestController,
  getAcceptedOrdersController,
  postOrderController,
  deleteOrderReqController,
  addUserOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
  updateOrderStateController,
} = require('./orders');

module.exports = {
  clientError,
  serverError,
  signupController,
  loginController,
  isAuthController,
  logoutController,
  providersListController,
  postOrderController,
  getPendingOrderRequestController,
  deleteOrderReqController,
  addUserOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
  updateAvailabilityController,
  getAcceptedOrdersController,
  providerDataController,
  getUserNotificationsController,
  updateProviderController,
  updateOrderStateController,
  updateCoverImageController,
  
  
};
