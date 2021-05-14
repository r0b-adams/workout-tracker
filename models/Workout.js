const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
      },
      name: {
          type: String,
          trim: true,
      },
      duration: {
          type: Number,
      },
      distance: {
          type: Number,
      },
      weight: {
          type: Number,
      },
      reps: {
          type: Number,
      },
      sets: {
          type: Number,
      },
      }
    
    ],
    totalDuration: Number,
});

// Total Workout Duration
// WorkoutSchema.methods.addUpDuration = function() {
//   let total = 0;
//   for (var i = 0; i < this.exercises.length; i++) {
//     total += this.exercises[i].duration;
//   }
//   this.totalDuration = total;
//   return this.totalDuration;
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;