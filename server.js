/*-----------------------------------------------------------------------*/
//BASIC SETUP
var express = require('express'); // calls express
var app = express(); //define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //requiring our mongoose DB

/*-----------------------------------------------------------------------*/
var ItemSchema = mongoose.Schema({
  name: String
});

var Items = mongoose.model('Items', ItemSchema);

/*-----------------------------------------------------------------------*/

var port = 3000
// var port = process.env.PORT ? uri = 'mongodb://heroku_tm5h3qpv:58hkbj01dbol21ee2vb99s8680@ds131480.mlab.com:31480/heroku_tm5h3qpv' : uri = 'mongodb://localhost/3000/';
mongoose.connect('mongodb://localhost/Items');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('we connected')
});

//config app to use bodyParser
// allows us to get data from POSTs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

//START SERVER
app.listen(port, function() {
  console.log('Connected to the port: ', port);
});

// app.use('/api', router);
//to run server, type node server.js in the terminal command line

app.get('/myList', function(req, res) {
  res.send('Hello World!')
})

app.post('/myList', function(req, res) {
  res.send('This is a post');
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
