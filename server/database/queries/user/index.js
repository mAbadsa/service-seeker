const checkUserByEmail = require('./checkUserByEmail');
const createNewUser = require('./createNewUser');
const getUserData = require('./getUserData');
const getUserOrdersQuery = require('./getUserOrders');
const getUserOrdersReqQuery = require('./getUserOrdersReq');
const getUserNotificationsQueries = require('./getUserNotifications');
const addUserNotification = require('./addUserNotification');

module.exports = {
  checkUserByEmail,
  createNewUser,
  getUserData,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  getUserNotificationsQueries,
  addUserNotification,
};
