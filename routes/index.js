var express = require('express');
var router = express.Router();

 // GET home page. 
// router.get('/catalog', function(req, res, next) {
//   console.log("this is request from index.js " + req);
//   console.log("this is response from index.js " + res);
//   // res.render('home', { title: 'Express' });
//   // res.render('home');
//   // res.redirect('/');
// });

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;
