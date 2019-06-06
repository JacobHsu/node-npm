const app = require('../app');
const env = require('../config/env');
const http = require('http');
const port = env[process.env.NODE_ENV].port || 8000;

const server = http.createServer(app);
server.listen(port, function () {
    console.log('listening on *:' + port);
});


