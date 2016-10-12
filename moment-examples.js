var moment 	= require('moment');
var now 	= moment();


// console.log(now.format());
// console.log(now.format('X')); //unix timestamp
// console.log(now.format('x')); //(js timestamp) milliseconds timestamp


var timestamp = 1476236260611;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('LT'));


// console.log(now.subtract(1,'year'));
// console.log(now.format());


// console.log(now.format('LT'));



//console.log(now.format('MMM Do YYYY, h:mm a')); //Oct 11th 2016, 9:28 pm