'use strict';

var app = require('express')();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});