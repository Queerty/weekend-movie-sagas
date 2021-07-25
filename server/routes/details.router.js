const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('details/:id', (req, res) => {
    console.log(req.params);
    let query = `
    SELECT movies.title, movies.description, movies.poster FROM movies
           JOIN movies_genres ON movies_genres.movie_id = movies.id
           JOIN genres ON genres.id = movies_genres.genre_id
           WHERE movies.id = $1
           GROUP BY movies.title, movies.description, movies.poster;
               `;
    pool.query(query, [req.params.id])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
  
  });
  module.exports = router;