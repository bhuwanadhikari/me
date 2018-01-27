const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/blog');
const Gphoto = require('../models/gphoto');

const router = express.Router();

const db = "mongodb://admin:admin@ds111258.mlab.com:11258/bhakari";
mongoose.Promise = global.Promise; // just to prevent from the warnings


// connecting to the database
mongoose.connect(db).then((result) => {
  console.log("Successfully connected to the database");


  // Route for getting the blogs from database.
  router.get('/blogs', (req, res) => {
    Blog.find({}).then((blogs)=>{
      res.json(blogs);
    }).catch((err) => {
      console.log("Error while getting blogs from the database", err);
    });
  });

  // Route for getting the gphotos from the database
  router.get('/gphotos', (req, res) => {
    Gphoto.find({}).then((gphotos) => {
      res.json(gphotos);
    }).catch((err) => {
      console.log("Error while getting gphotos from the database", err);
    });
  });



// Catch for the database connection
}).catch((err) => {
  console.log("Error has occured while connecting to the database", err);
});


module.exports = router;
