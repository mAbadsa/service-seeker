const boomify = require('./boomify');
const promiseJWT = require('./jwtFunctions');
const sendNotification = require('./sendNotification');
const calculateDuration = require('./calculateDuration');
const sendTheBill = require('./sendBill');
const uploadCloudinary = require('./uploadCloudinary');

module.exports = {
  promiseJWT,
  boomify,
  sendNotification,
  calculateDuration,
  sendTheBill,
  uploadCloudinary,
};
