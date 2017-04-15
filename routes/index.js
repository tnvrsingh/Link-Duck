var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var shortid = require('shortid');
var validUrl = require('valid-url');

var mLab = "mongodb://localhost:27017/url-shortener-microservice";
var MongoClient = mongodb.MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new/:url(*)', function (req, res, next) {
  MongoClient.connect(mLab, function (err, db) {
  if (err) {
    console.log("Unable to connect to server", err);
  } else {
    console.log("Connected to server")
    };
  });
});

module.exports = router;
