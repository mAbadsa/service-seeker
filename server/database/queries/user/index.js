const checkUserByEmail = require('./checkUserByEmail');
const createNewUser = require('./createNewUser');
const getUserData = require('./getUserData');
const deleteOrderReq = require('./deleteOrderReq');
const getUserOrdersQuery = require('./getUserOrders');
const getUserOrdersReqQuery = require('./getUserOrdersReq');

module.exports = {
  checkUserByEmail,
  createNewUser,
  getUserData,
  deleteOrderReq,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
};
