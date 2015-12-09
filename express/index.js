var app = require('express')();

app.get('/', function(req, res){
  //res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000)