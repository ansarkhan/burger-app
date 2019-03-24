var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "burgers_db",
    user: "root",
    password: "password"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});


module.exports = connection;