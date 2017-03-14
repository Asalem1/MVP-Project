/*-----------------------------------------------------------------------*/
//BASIC SETUP
//step 1 is to call the packages we need from our package.json (when installed via npm install)
//before starting, run npm install
var express = require('express'); // calls express
var app = express(); //define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //requiring our mongoose DB


// mongoose.connect('mongodb://heroku_tm5h3qpv:58hkbj01dbol21ee2vb99s8680@ds131480.mlab.com:31480/heroku_tm5h3qpv'); //connects to specific mongoose DB - need to specify location
// var Item = require('/models/item'); //accessing the itemSchema we created in models/item
var port = process.env.PORT ? uri = 'mongodb://heroku_tm5h3qpv:58hkbj01dbol21ee2vb99s8680@ds131480.mlab.com:31480/heroku_tm5h3qpv' : uri = 'mongodb://localhost/57412';
mongoose.connect(port)
mongoose.once(function(req, res) {
  console.log('connected');
})


//config app to use bodyParser
// allows us to get data from POSTs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './')));
// app.use(express.static(__dirname + 'index.html'))

mongoose.connect(uri)
/*-----------------------------------------------------------------------*/
var ItemSchema = mongoose.Schema({
  name: String
});

var Item = mongoose.model('Item', ItemSchema);

/*-----------------------------------------------------------------------*/
//START SERVER
app.listen(port, function() {
  console.log('Connected to the port: ', port);
});

// app.use('/api', router);
//to run server, type node server.js in the terminal command line

app.get('/', function(req, res) {
  console.log(req)
  res.send('Hello World');
})

app.post('/', function(req, res) {
  res.send('This is a post request');
  // send body info to DB
})

/*-----------------------------------------------------------------------*/
//SET ROUTES FOR API
// var router = express.Router();

// // we must add middleware to use for all our requests (GET, POST, etc...)
// router.use(function(req, res, next) {
//   console.log('something happened');
//   next(); //this makes sure we continue onto our next route without stopping here
// });

// router.get('/', function(req, res) {
//   res.json({ message: 'welcome to our API' }); //sending info as json data is the norm
//   res.send('Hello World!');
// });

// router.route('models/items')
//   .post(function(req, res) {
//     var item = new Item();
//     item.name = req.body.name;
//     item.save(function(err) {
//       if (err) { res.send(err); }
//       res.json({ message: 'Item created!' });
//     });
//     .get(function(req, res) {
//       item.find(function(err, items) {
//         if (err) { res.send(err); }
//         res.json(items)
//       })
//     })
//   });
//to be continued..


// register our routes
// all of our routes will be prefixed with /api
/*-----------------------------------------------------------------------*/
module.exports = app;
