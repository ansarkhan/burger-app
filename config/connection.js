var mysql = require("mysql");


if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        database: "burgers_db",
        user: "root",
        password: "password"
    });

}


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});


module.exports = connection;