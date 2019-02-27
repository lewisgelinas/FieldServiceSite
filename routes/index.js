var express = require('express');
var app = express(); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  app.use(express.static(__dirname + '/public'));
});

module.exports = router;


