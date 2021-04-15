/* eslint-disable prettier/prettier */
const moment = require('moment');

const calculateDuration = (end, start) => moment.duration(end.diff(start.add(3, 'hours'))).asHours();

module.exports = calculateDuration;
