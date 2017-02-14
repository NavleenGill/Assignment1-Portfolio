/*
 File name: index.js
 Author's name: Navleen Kaur Gill
 Website name: My Portfolio
 File Description: This file defines routes for all of the site pages - home, about, services, projects and contact
 */

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

/* GET services page */
router.get('/services', function (req, res, next) {
    res.render('services');
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
