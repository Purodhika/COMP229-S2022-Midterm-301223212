/*Name: Purodhika Sharma
Student ID: 301223212
Date: 25-06-22
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let movies = require('../models/movies');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    movies: ''
   });
});

module.exports = router;
