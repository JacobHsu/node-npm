var later = require('later');
later.date.localTime();

console.log("Now:"+new Date());
//2秒後運行，循環運行，直到15秒後，clear停止！
var sched = later.parse.recur().every(2).second(),
    t = later.setInterval(function() {
        test('hello');
    }, sched);

function test(val) {
   console.log(new Date());
   console.log(val);
}

setTimeout(function(){
   t.clear();
   console.log("Clear");
},15*1000);