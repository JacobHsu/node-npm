var jsdom = require('jsdom');
var moment = require('moment-timezone');

var status = {
  'images/StorageIcon001.jpg': 'empty',
  'images/StorageIcon002.jpg': 'medium',
  'images/StorageIcon003.jpg': 'full'
};

var url = 'http://www.blood.org.tw/Internet/main/index.aspx';

jsdom.env(
  url,
  ['http://code.jquery.com/jquery.js'],
  function (errors, window) {
    var $ = window.$;
    var storages = $('.Storage').toArray();
    var json = {form: url ,time: moment().tz('Asia/Taipei').format()};
    storages.forEach(function(s) {
      var name = $(s).find('#StorageHeader a').text();
      json[name] = {name: name};
      var types = ['StorageA', 'StorageB', 'StorageO', 'StorageAB'];
      types.forEach(function(type) {
        var data = status[$(s).find('#' + type + ' img').attr('src')];
        json[name][type] = data;
      });
    });
    console.log(json);
  }
);