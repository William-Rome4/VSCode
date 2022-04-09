var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./database/Enterprise.db');
var port = 3333;

var app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/form.html'));
});

app.post('/add', function (req, res) {
    db.serialize(() => {
        db.run('INSERT INTO Employee (id, name, age, address) VALUES(?, ?, ?, ?)',
            [req.body.id, req.body.name, req.body.age, req.body.address], function (err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log("New employee registered successfully.");
                res.send("New employee with ID = " + req.body.id + " and name = " + req.body.name);
            }
        );
    });
});

server.listen(3333, function () {
    console.log(`Server listening on port 3333`);
});
