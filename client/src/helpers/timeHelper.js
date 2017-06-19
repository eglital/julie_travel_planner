const TimeHelper = {};

TimeHelper.millisecondsToSeconds = (milli) => {
    return Math.round(+milli/1000/60);
};

TimeHelper.getNextHour = () => {
    let ROUNDING = 60 * 60 * 1000; /*ms*/
    let start = Date.now();
    return Math.ceil(+start / ROUNDING) * ROUNDING;
};

TimeHelper.offsetTime = function offsetTime(time, startOffset) {
  let hoursInMilliseconds = startOffset * 60 * 60 * 1000;
  return time + +hoursInMilliseconds;
};

module.exports = TimeHelper;