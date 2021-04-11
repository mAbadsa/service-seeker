const { clientError, serverError } = require('./error');
const {
  providersListController,
  updateAvailabilityController,
  getAcceptedOrdersController,
  getPendingOrderRequestController,
  postOrderController,
  providerDataController,
  updateProfileProviderController,
} = require('./provider');
const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
  deleteOrderReqController,
  userOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
} = require('./user');

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
  userOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
  updateAvailabilityController,
  getAcceptedOrdersController,
  providerDataController,
  updateProfileProviderController,
};
