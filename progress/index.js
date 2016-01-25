var ProgressBar = require('progress');
var https = require('http');
 
var req = https.request({
  host: 'vjs.zencdn.net',
  port: 80,
  path: '/v/oceans.mp4'
});
 
req.on('response', function(res){
  var len = parseInt(res.headers['content-length'], 10);
 

  var bar = new ProgressBar('  downloading [:bar] :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: len
  });
 
  res.on('data', function (chunk) {
    bar.tick(chunk.length);
  });
 
  res.on('end', function () {
    console.log('\n');
  });
});
 
req.end();