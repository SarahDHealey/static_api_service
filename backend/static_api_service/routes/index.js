var express = require('express');
var router = express.Router();
var helpers = require('../lib/helpers');

/* GET home page. */
router.get('/', function(req, res, next){
  res.json(helpers.getAllUsers());
});

router.get('/users', function(req, res, next){
  res.json(helpers.getActiveUsers());
});

module.exports = router;
