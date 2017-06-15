const TimeHelper = {};

TimeHelper.millisecondsToSeconds = (milli) => {
    return Math.round(+milli/1000/60);
};


module.exports = TimeHelper;