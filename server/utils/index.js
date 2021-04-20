const boomify = require('./boomify');
const promiseJWT = require('./jwtFunctions');
const sendNotification = require('./sendNotification');
const calculateDuration = require('./calculateDuration');
const sendTheBill = require('./sendBill');

module.exports = {
  promiseJWT,
  boomify,
  sendNotification,
  calculateDuration,
  sendTheBill,
};
