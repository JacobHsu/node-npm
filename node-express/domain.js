const domain = require('domain');
const http = require('http');


const d = domain.create();

d.on('error', function (err) {
    console.error('Error', err);
});

d.run(handler);

function handler() {
    function myapp(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World http://localhost:8080/ !');
        res.end();
    }
    var server = http.createServer(myapp);
    server.listen(8080);
}


