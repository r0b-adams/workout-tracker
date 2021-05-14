const router = require('express').Router();
const db = require("../../models");

// client side will parse out the required data
// server side can just send all workouts with associated exercises
// localhost:3001/api/workouts
router.get("/", async (req, res) => {
    try { // aggregate function will
        const getWorkouts = await db.Workout.aggregate([{$addFields:{totalDuration:{$sum:"$exercises.duration" }}}]) // this returns an array of objects, so watch out for indexing
        res.status(200).json(getWorkouts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// updates workout by id with new exercise
// localhost:3001/api/workouts/:id
router.put("/:id", async (req, res) => {
    try {
        const updatedWorkout = await db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: req.body } }, { new: true });
        res.status(200).json(updatedWorkout)
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a brand new workout
// localhost:3001/api/workouts
router.post("/", async (req, res) => {
    try {
        const newWorkout = await db.Workout.create({});
        res.status(200).json(newWorkout)
    } catch (err) {
      res.status(500).json(err);
    }
});

// View the combined weight of multiple exercises from the past seven workouts on the stats page.
// View the total duration of each workout from the past seven workouts on the stats page.
// sort by reverse chronological order
// localhost:3001/api/workouts/range
router.get("/range", async (req, res) => {
    try {
        const getWorkouts = await db.Workout.aggregate([{$addFields:{totalDuration:{$sum:"$exercises.duration" }}}]).sort({day: -1}).limit(7);
        res.status(200).json(getWorkouts)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;