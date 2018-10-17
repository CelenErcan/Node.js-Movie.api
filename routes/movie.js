const express = require('express');
const router = express.Router();

//model deki datayı çekme
const Movie = require('../models/Movie');

//Tüm filmleri getirir.
router.get('/', (req, res) => {
   const promise = Movie.find({ });
   
   promise.then((data) => {
      res.json(data); 
   }).catch((err) => {
      res.json(err); 
   });
});

//Id bazlı tek film getirir.
router.get('/:movie_id', (req, res, next) => {
    const  promise = Movie.findById(req.params.movie_id);
    
    promise.then((movie) => {
        if (!movie)
            next({message: "Film bulunamadı.!!", code: 99});
        res.json(movie);
    }).catch((err) => {
        res.json(err);
    });
});

//Id bazlı tek filmi günceller.
router.put('/:movie_id', (req, res, next) => {
    const  promise = Movie.findByIdAndUpdate(
        req.params.movie_id,
        req.body,
        {
            new: true
        }
    );
    
    promise.then((movie) => {
        if (!movie)
            next({message: "Film bulunamadı.!!", code: 99});
        res.json(movie);
    }).catch((err) => {
        res.json(err);
    });
});

//ID bazlı tek filmi siler.
router.delete('/:movie_id', (req, res, next) => {
    const  promise = Movie.findByIdAndRemove(req.params.movie_id);
    
    promise.then((movie) => {
        if (!movie)
            next({message: "Film bulunamadı.!!", code: 99});
        res.json(movie);
    }).catch((err) => {
        res.json(err);
    });
});


//Film Ekleme için kullanılır.
router.post('/', (req, res, next) => {
    
     const movie = new Movie(req.body);
     const promise = movie.save();
     
     promise.then((data) => {
         res.json({status: 1});
     }).catch((err) => {
         res.json(err);
     });
    
    
});

module.exports = router;
