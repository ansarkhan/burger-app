var express = require("express");
var orm = require("../config/orm.js");
var burgers = require("../models/burger.js")

var router = express.Router();

router.get("/", function(req,res,next) {
    burgers.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
    
});

router.post("/api/burgers", function(req, res) {
    burgers.insertOne("burger_name", "devoured", [req.body.burger_name, false], function(result) {
        res.json({id: result.insertId});
    });
});

// router.post("/api/cats", function(req, res) {
//     cat.create([
//       "name", "sleepy"
//     ], [
//       req.body.name, req.body.sleepy
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });



module.exports = router;


// router.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });