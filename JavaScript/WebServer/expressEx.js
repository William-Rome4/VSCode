var express = require('express');
var http = require('http');
var port = 3333;

var app = express();
var server = http.createServer(app);

app.get('/getMethod', function (req, res) {
    res.send('<h1>You have been connected successfully</h1>');
});

server.listen(3333, function () {
    console.log(`Server listening on port 3333`);
});