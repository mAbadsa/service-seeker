const checkUserByEmail = require('./checkUserByEmail');
const createNewUser = require('./createNewUser');
const getUserData = require('./getUserData');
const deleteOrder = require('./deleteOrder');
const getUserOrdersQuery = require('./getUserOrders');
const getUserOrdersReqQuery = require('./getUserOrdersReq');

module.exports = {
  checkUserByEmail,
  createNewUser,
  getUserData,
  deleteOrder,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
};
