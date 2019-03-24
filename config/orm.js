var connection = require("./connection");



var orm = {
    selectAll: function(tableInput, cb) {
        var sql = `SELECT * FROM ${tableInput}`;

        connection.query(sql, function(err,result) {
            if (err) {
                throw err;
            }
            cb(result)
        });

    },

    // create: function(table, cols, vals, cb) {
    //     var queryString = "INSERT INTO " + table;
    
    //     queryString += " (";
    //     queryString += cols.toString();
    //     queryString += ") ";
    //     queryString += "VALUES (";
    //     queryString += printQuestionMarks(vals.length);
    //     queryString += ") ";
    
    //     console.log(queryString);
    
    //     connection.query(queryString, vals, function(err, result) {
    //       if (err) {
    //         throw err;
    //       }
    
    //       cb(result);
    //     });
    //   },

    insertOne: function(tableInput, col1, col2, vals) {
        var sql = (`INSERT INTO ${tableInput} (${col1}, ${col2}) VALUES (?,?)`);

        // console.log(sql);

        connection.query(sql, vals, function (err, result) {
            if (err) throw err;
            cb(result)
        });

    },

    updateOne: function(dev, b_name){
        var sql = (`UPDATE burgers SET devoured = (?) WHERE burger_name = (?)`);

        connection.con.query(sql, [dev, b_name], function(err, result) {
            if (err) throw err;
            console.log("1 record updated");
        });
    }
};

module.exports = orm;

