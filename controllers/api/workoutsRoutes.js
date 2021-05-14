const router = require('express').Router();

// let mongoose = require("mongoose");

let db = require("../../models");


// localhost:3001/api/workouts
router.get("/", (req, res) => {

    console.log("rasjdfkl");
    res.send("FINALLY")

});

module.exports = router;