const path = require('path');                  // The path module helps interact with the file system (part of Node.js)
const express = require("express");            // server functions
const logger = require("morgan");              // see http reqs
const mongoose = require("mongoose");          // db and schema based models
const controllers = require("./controllers");  // require controllers for routing

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

// middleware that helps with data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers); // tells express to use routing

// deliver staic assets from these folders
app.use(express.static('public'));
app.use(express.static('views'));

// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true }); //boilerplate (replace populate with db name)

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/exercise.html'));
});

app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/stats.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

