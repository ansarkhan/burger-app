var orm = require("../config/orm.js");
  
var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cb) {
        orm.insertOne("burgers", col1, col2, vals, function(res) {
            cb(res);
        });
    }
}

module.exports = burgers;
