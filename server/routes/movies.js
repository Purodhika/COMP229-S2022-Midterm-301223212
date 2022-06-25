// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const movies = require('../models/movies');
// call the movies model
let movie = require('../models/movies');

/* GET movies List page. READ */
router.get('/', (req, res, next) => {
  // find all movie in the books collection
  movie.find( (err, list) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('movies/index', {
        title: 'Movies',
        list: list
      });
    }
  });

});

//  GET the Movies Details page in order to add a new Movies
router.get('/add', (req, res, next) => {

  res.render('../views/movies/details', { 
    list: {}, 
    title: 'Add Movie'});


});

// POST process the Movies Details page and create a new Movies - CREATE
router.post('/add', (req, res, next) => {

   let newMovie = movie({
    Title: req.body.title,
    Description: req.body.description,
    Released: req.body.released,
    Director: req.body.director,
    Genre: req.body.genre

   });
movie.create(newMovie, (err, entry) => {
  if(err)
    {
    console.log(err);
    res.end(err);
    }
    else 
    {
    res.redirect('/movies');
    }
  });
});


// GET the Movies Details page in order to edit an existing Movies
router.get('/:id', (req, res, next) => {

  let id = req.params.id;

  
  movie.findById(id, (err, movie) =>{
      if(err)
      {
          console.log(err);
          res.end(err); 
      }
      else
      {
          res.render('../views/movies/details', {
            title: 'Edit Movie', 
            list: movie});
      }
  });
});


// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  let id = req.params.id;

  let editedMovie = new movie({
    _id: id,
    Title: req.body.title,
    Description: req.body.description,
    Released: req.body.released,
    Director: req.body.director,
    Genre: req.body.genre
  });

  movie.updateOne({_id: id}, editedMovie, (err, entry) =>{
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
      {
        res.redirect('/movies');
      }
   });
});

;



// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    let id = req.params.id;
  
    movie.remove({_id: id}, (err) =>{
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else 
      {
      res.redirect('/movies')
      }
    });
  
  });
  



module.exports = router;
