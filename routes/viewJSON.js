var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectID;

router.get('/', function(req,res) { 
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("testingdb");
        dbo.collection("testapp").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result);
        db.close();
        });
    });
    res.status(200); 
})

module.exports = router; 