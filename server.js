/*-----------------------------------------------------------------------*/
//BASIC SETUP
//step 1 is to call the packages we need from our package.json (when installed via npm install)
//before starting, run npm install
var express = require('express'); // calls express
var app = express(); //define our app using express
var bodyParser = require('body-parser');

var mongoose = require('mongoose'); //requiring our mongoose DB
mongoose.connect(); //connects to specific mongoose DB - need to specify location
//accessing the BearSchema we created in models/bear

//config app to use bodyParser
// allows us to get data from POSTs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //sets our PORT

/*-----------------------------------------------------------------------*/
//SET ROUTES FOR API
var router = express.Router();

// we must add middleware to use for all our requests (GET, POST, etc...)
router.use(function(req, res, next) {
  console.log('something happened');
  next(); //this makes sure we continue onto our next route without stopping here
});

router.get('/', function(req, res) {
  res.json({ message: 'welcome to our API' }); //sending info as json data is the norm
  res.send('Hello World!');
});


//to be continued..


// register our routes
// all of our routes will be prefixed with /api
app.use('/api', router);

/*-----------------------------------------------------------------------*/
//START SERVER
app.list(port, function() {
  console.log('Connected to the port: ', port);
});
//to run server, type node server.js in the terminal command line

/*-----------------------------------------------------------------------