/*Name: Purodhika Sharma
Student ID: 301223212
Date: 25-06-22
*/
let mongoose = require('mongoose');

// create a model class
let Movies = mongoose.Schema({
    Title: String,
    Description: String,
    Released: Number,
    Director: String,
    Genre: String
},
{
  collection: "movies"
});

module.exports = mongoose.model('Movies', Movies);