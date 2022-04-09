var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./database/Enterprise.db');

db.run(
    "CREATE TABLE IF NOT EXISTS Employee (" +
    "id INT NOT NULL, " +
    "name VARCHAR(20) NOT NULL," +
    "age INT NOT NULL, " +
    "address VARCHAR(35), " +
    "PRIMARY KEY (id) )"
);

console.log("Table was successfully created.");