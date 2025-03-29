const express = require('express');
const Workout = require('../models/Workout');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new workout log
router.post('/', authMiddleware, async (req, res) => {
  const { exercise, sets, reps, weight } = req.body;
  try {
    const newWorkout = new Workout({
      userId: req.user.id,
      exercise,
      sets,
      reps,
      weight
    });
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(500).json({ message: 'Error creating workout' });
  }
});

// Get all workouts for a user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching workouts' });
  }
});

// **Fix: Add missing progress tracking route**
router.get('/progress', authMiddleware, async (req, res) => {
  try {
    const progressData = await Workout.find({ userId: req.user.id }).sort({ date: 1 });
    res.json(progressData);
  } catch (error) {
    res.status(500).send('Error fetching progress data');
  }
});

// Update a workout
router.put('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { exercise, sets, reps, weight, date } = req.body;
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      id,
      { exercise, sets, reps, weight, date },
      { new: true }
    );
    if (!updatedWorkout) {
      return res.status(404).json({ message: 'Workout not found with the provided ID' });
    }
    res.json(updatedWorkout);
  } catch (err) {
    res.status(500).json({ message: 'Error updating workout', error: err.message });
  }
});

// Delete a workout
router.delete('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(id);
    if (!deletedWorkout) {
      return res.status(404).json({ message: 'Workout not found with the provided ID' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting workout', error: err.message });
  }
});

module.exports = router;
