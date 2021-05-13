const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('views'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true }); //boilerplate (replace populate with db name)


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


// let's start by getting the page routes to work

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/exercise.html'));
});

app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/stats.html'));
});

// If no matching route is found default to home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

