var http = require('http');
var dt = require('./dateTimeModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World! TEST');
    res.write('\nData e Hora ' + dt.myDateTime());
    console.log(dt.myDateTime());
    res.end();
}).listen(8000, '127.0.0.1');
