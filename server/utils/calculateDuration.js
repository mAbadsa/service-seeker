const calculateDuration = (dt1) => {
  let diff = (new Date().getTime() - new Date(dt1).getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(diff);
};

module.exports = calculateDuration;
