var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Navleen Gill' });
});


/* GET about page */
router.get('/about', function (req, res, next) {
    res.render('about');
});

/* GET projects page */
router.get('/projects', function (req, res, next) {
    res.render('projects');
});

/* GET contact page */
router.get('/contact', function (req, res, next) {
    res.render('contact');
});


module.exports = router;
