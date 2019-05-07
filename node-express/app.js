var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log('pin here')
  console.log(111)
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

var server = require('http').createServer(app);

server.listen(3000, function () {
  console.log(`Example http listening on port ${server.address().port}!`);
});

server.on('listening',onListening);  

function onListening() {
  console.log( server.address(), server.listening )
}