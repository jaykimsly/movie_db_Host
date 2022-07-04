const express = require("express");
const app = express();
const sendMovieController= require('../controllers/sendmovie.controller')
app.get('/testsend', sendMovieController.send)
app.get('/testsend/:id', sendMovieController.send)

module.exports= app;
