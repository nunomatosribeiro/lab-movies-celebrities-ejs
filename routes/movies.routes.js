// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/create", async (req, res) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.render("movies/new-movie", { allCelebrities });
  } catch (error) {
    console.log(error);
  }
});

router.post("/create", async (req, res) => {
  const movie = req.body;

  try {
    const newMovie = await Movie.create(movie);
    res.redirect("/movies");
  } catch (error) {
    console.log(error);
  }
});

router.get("/movies", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.render("movies/movies", { allMovies });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
