var Log = require('log')
  , fs = require('fs')
  , stream = fs.createReadStream(__dirname + '/my.log')
  , log = new Log('debug', stream);

log.on('line', function(line){
  console.log(line);
});
