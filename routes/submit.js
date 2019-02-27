var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/";

//Note, setting router "/" defined the URL of the endpoint in app.js with app.use('/URLpath') 
router.post('/', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("testingdb");

        dbo.collection("testapp").insertOne(req.body, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });

        res.status(200).json({status:"Ok"})
    });
 
});


router.get('/', function(req,res) { 
    res.send("Reached the submit URL"); 
})

module.exports = router;
