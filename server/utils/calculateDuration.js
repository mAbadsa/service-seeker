const calculateDuration = (dt1, dt2) => {
  let diff = (new Date(dt2).getTime() - new Date(dt1).getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(diff);
};

module.exports = calculateDuration;
