var later = require('later');
later.date.localTime();

console.log("Now:"+new Date());
//5秒後運行，只運行一次。
var sched = later.parse.recur().every(5).second(),
    t = later.setTimeout(function() {
        test('hello later');
    }, sched);

function test(val) {
   console.log(new Date());
   console.log(val);
}