const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    var hours = Math.floor(value / 3600);
    var minutes = Math.floor((value - (hours * 3600)) / 60);
    var seconds = value - (hours * 3600) - (minutes * 60);
    hours < 10 ?  hours = "0" + hours  : hours = hours;
    minutes < 10 ?  minutes = "0" + minutes  : minutes = minutes;
    seconds < 10 ?  seconds = "0" + seconds  : seconds = seconds;
    return hours + ':' + minutes + ':' + seconds;
}
console.log(toHoursMinutesSeconds(3600))
console.log(toHoursMinutesSeconds(3720))
console.log(toHoursMinutesSeconds(3725))



//  assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
//  assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
//  assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")