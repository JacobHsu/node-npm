var EventEmitter = require('events')
 
var ee = new EventEmitter()
ee.on('message', function (text) {
  console.log(text)
})
setTimeout(function() { 
  ee.emit('message', 'hello world')
}, 1000); 

// 運行這段代碼，1 秒後控制台輸出了 'some_event 事件觸發'。其原理是 event 對象註冊了事件 some_event 的一個監聽器，然後我們通過 setTimeout 在 1000 毫秒以後向 event 對象發送事件 some_event，此時會調用some_event 的監聽器。
// $ node index.js 