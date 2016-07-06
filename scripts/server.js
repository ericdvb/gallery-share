// third party libraries
var express = require('express');
var connectLR = require('connect-livereload');
var mongo = require('mongodb').MongoClient;

// import our modules
var video = require('./video.js')(router);

var app = express();

app.listen( 4000, function() {
  console.log('started listening on 4000');
});

// ******* STATIC SERVER *******
app.use( connectLR( { port: 35729 } ) );
app.use( express.static(__dirname + '/../'));

// ******* API ROUTES *******
// 
// Create our router
var router = express.Router();

// route for viewing administration panel
// route for approving photos
// route for viewing gallery
// route for sharing image

app.use('/', router);
