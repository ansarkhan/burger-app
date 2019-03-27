var orm = require("../config/orm.js");
  
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(col1, col2, vals, cb) {
        orm.insertOne("burgers", col1, col2, vals, function(res) {
            cb(res);
        });
    },
    
    updateOne: function(col, val1, val2, cb) {
        orm.updateOne("burgers", col, val1, val2, function(res) {
            cb(res);
        });
    },
    deleteOne: function(id, cb) {
        orm.deleteOne("burgers", id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;

