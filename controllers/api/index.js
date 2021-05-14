const router = require('express').Router();
const workoutsRoutes = require('./workoutsRoutes');

// localhost:3001/api/workout
router.use('/workouts', workoutsRoutes);

module.exports = router;
