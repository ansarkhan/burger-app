var express = require("express");
var orm = require("../config/orm.js");
var burgers = require("../models/burger.js")

var router = express.Router();

router.get("/", function(req,res,next) {
    burgers.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject)
    });
    
});

// var data1 = {
//     test: "hello"
// }
// router.get("/test", function(req,res,next) {
//     res.json({data: data1})
    
// });

router.post("/api/new-burger", function(req, res) {
    burgers.insertOne("burger_name", "devoured", ["base_test", false], function(result) {
        // res.json({id: result.insertId});
        console.log(result);
    });
});



module.exports = router;
