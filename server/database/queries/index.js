const {
  createNewUser,
  checkUserByEmail,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  deleteOrderReq,
} = require('./user');
const { createNewProvider } = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  deleteOrderReq,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
};
