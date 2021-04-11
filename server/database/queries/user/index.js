const checkUserByEmail = require('./checkUserByEmail');
const createNewUser = require('./createNewUser');
const getUserData = require('./getUserData');
const deleteOrderReq = require('./deleteOrderReq');
const addOrderRequest = require('./addOrderRequest');
const getUserOrdersQuery = require('./getUserOrders');
const getUserOrdersReqQuery = require('./getUserOrdersReq');
const isAlreadyHeired = require('./isAlreadyHeired');

module.exports = {
  checkUserByEmail,
  createNewUser,
  getUserData,
  deleteOrderReq,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  isAlreadyHeired,
};
