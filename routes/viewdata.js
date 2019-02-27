var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectID;

router.get('/', function(req,res) { 
    var id = req.query.id; 
    MongoClient.connect(url, function(err,db){
        if (err) throw err; 
        var dbo = db.db("testingdb");        
        dbo.collection("testapp").findOne({"_id":new ObjectId(id)}, function(err,doc) {
            res.json(doc); 
            db.close(); 
        });
    });
    res.status(200); 
})

module.exports = router; 