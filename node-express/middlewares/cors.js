module.exports = cors

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods

function cors() {
    return function(req, res, next) {
        console.log('cors');
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin')
        next()
    }
}
