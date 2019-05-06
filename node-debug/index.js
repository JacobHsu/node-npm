var debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';
 
// fake app
 
debug('booting %o', name);
console.log('hi inedex');


var logger = require('logger').createLogger(); // logs to STDOUT

logger.info('loading an array', [1,2,3], 'now!');
//=> info [Sat Jun 12 2010 01:12:05 GMT-0400 (EDT)]  loading an array [ 1, 2, 3, [length]: 3 ] now!
 
