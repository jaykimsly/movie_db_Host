const express = require("express");
const app = express();
const viewUserController= require('../controllers/viewmovie.controller')
app.get('/test', viewMovieController.view)
app.get('/test/:id', viewMovieController.viewOne)

module.exports= app;