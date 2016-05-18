
var csv = require('ya-csv')
   , fs = require('fs');
var writer = csv.createCsvStreamWriter( fs.createWriteStream('file.csv') );
writer.writeRecord(['data1','msg2']);


// A simple echo program:
// var csv = require('ya-csv');
//
// var reader = csv.createCsvStreamReader(process.openStdin());
// var writer = csv.createCsvStreamWriter(process.stdout);
//
// reader.addListener('data', function(data) {
//     writer.writeRecord(data);
// });
