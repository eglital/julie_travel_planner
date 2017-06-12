const moment = require('moment');
// require('moment-round');

// let newMoment = moment();
// console.log(newMoment);

// console.log(newMoment.ceil(1, 'hours'));
// console.log(newMoment);

// console.log(newMoment.add(1, 'h'));
// console.log(newMoment);


function getNextHour() {
    let ROUNDING = 60 * 60 * 1000; /*ms*/
    let start = moment();
    start = moment(Math.ceil((+start) / ROUNDING) * ROUNDING);
    return start;
}

console.log(getNextHour());