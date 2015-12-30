var later = require('later');

var sched = later.parse.text('every 5 mins'),
    occurrences = later.schedule(sched).next(10);

for(var i = 0; i < 10; i++) {
    console.log(occurrences[i]);
}

// fires at 10:15am every day
var cron = '15 10 * * ? *';
var s = later.parse.cron(cron);

later.schedule(s).next(10);