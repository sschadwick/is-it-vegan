var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/users_dev');
process.env.APP_SECRET = process.env.APP_SECRET || 'for the love of zeus! Change Me!';

app.use(express.static(__dirname + '/build'));


var usersRouter = require(__dirname + '/routes/users_routes');

app.use('/api', usersRouter);

var port = process.env.PORT || 3000;
module.exports = app.listen(port, function() {
  console.log('server up on port: ' + port);
});
