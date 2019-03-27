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

    insertOne: function(tableInput, col1, col2, vals, cb) {
        var sql = (`INSERT INTO ${tableInput} (${col1}, ${col2}) VALUES (?,?)`);

        // console.log(sql);

        connection.query(sql, vals, function (err, res) {
            if (err) throw err;
            cb(res)
        });

    },


    updateOne: function(tableInput, col, val1, val2, cb){
        var sql = (`UPDATE ${tableInput} SET devoured = ${val1} WHERE ${col} = (${val2})`);

        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record updated");
            cb(result)
        });
    },

    deleteOne: function(tableInput, id, cb) {
        var sql = (`DELETE FROM ${tableInput} WHERE id=${id}`);

        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record deleted");
            cb(result);
        });
    }
};

module.exports = orm;


