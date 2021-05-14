const router = require('express').Router();



// get last workout
// localhost:3001/api/workouts
router.get('/workouts', async (req, res) => {
    console.log("get last workout ping");
    console.log(req.body);
});

// add exercise (to an existing workout)
// localhost:3001/api/workouts
router.put('/workouts', async (req, res) => {
    console.log("add exercise ping");
    console.log(req.body);

});

// create workout
// localhost:3001/api/workouts
router.post('/workouts', async (req, res) => {
    console.log("create workout ping");
    console.log(req.body);

});

// get workouts in range
// localhost:3001/api/workouts/range
router.get('/workouts/range', async (req, res) => {
    console.log("get workouts in range ping");
    console.log(req.body);
});

module.exports = router;