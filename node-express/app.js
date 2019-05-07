var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! loc');
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

var server = require('http').createServer(app);

// server.listen(3000, function () {
//   console.log(`Example http listening on port ${server.address().port}!`);
// });
server.listen(9999);
server.on('listening',onListening);  

function onListening() {
  console.log( server.address(), server.listening )
}

// 沒有裝載路徑的中介軟體函數。每當應用程式收到要求時，就會執行此函數
app.use(function (req, res, next) {
  console.log('Time:', Date.now()); //拜訪網頁會顯示
  next();
});

app.use(require('./middlewares/cors')())