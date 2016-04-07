var fs = require('fs')
  , Log = require('log')
  , log = new Log('debug', fs.createWriteStream('my.log'));

var user_email = "test@gmail.com";
log.error('oh no, failed to send mail to %s.', user_email);
