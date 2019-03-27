var express = require("express");
// var orm = require("../config/orm.js");
var burger = require("../models/burger.js")

var router = express.Router();

router.get("/", function(req,res,next) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject)
    });
    
});
  

router.post("/api/new-burger", function(req, res) {
    burger.insertOne("burger_name", "devoured", [req.body.burger_name, req.body.devoured], function(result) {
        res.json({id: result.insertId});
        console.log(result);
    });
});


router.put("/api/burger/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    
    burger.updateOne("id", 1, id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);

    burger.deleteOne(id, function(result) {
        return res.status(200).end();
    });
})

// router.post("/api/new-burger", function(req, res) {
//     res.send({ hello: 'world' });
//     console.log(res);
// })


module.exports = router;