var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// // Create routes
// var routes = require('./route')(app);


// create PORT
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  var dPort = server.address().port;
  console.log("My weather is running on port: ", dPort);
});