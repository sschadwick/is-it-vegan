var express = require('express');
var jsonParser = require('body-parser').json();

var handleError = require(__dirname + '/../lib/handle_error');
var eatauth = require(__dirname + '/../lib/eat_auth');
var httpBasic = require(__dirname + '/../lib/http_basic');

var upcRoute = module.exports = exports = express.Router();

upcRoute.get('/scan', function(req, res) {
  //TODO: take req.upc, use Nutritionix API
  //TODO: scan ingredients for animal-products
});
