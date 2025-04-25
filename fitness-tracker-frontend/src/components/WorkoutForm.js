import React, { useState } from 'react';
import axios from 'axios';
import './WorkoutForm.css';

const WorkoutForm = () => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const [customExercise, setCustomExercise] = useState('');
  const [exercises, setExercises] = useState(['Push-up', 'Squat', 'Deadlift', 'Bench Press', 'Pull-up']);
  const [date, setDate] = useState('');

  const handleAddCustomExercise = () => {
    if (customExercise.trim() && !exercises.includes(customExercise)) {
      setExercises([...exercises, customExercise]);
      setCustomExercise('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!date) {
        setMessage('Please select a valid date.');
        return;
      }
      const formattedDate = new Date(date).toISOString(); // Ensure consistent ISO format
      await axios.post(
        'http://localhost:5000/api/workouts',
        { exercise, sets, reps, weight, date: formattedDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Workout added successfully!');
      setExercise('');
      setSets('');
      setReps('');
      setWeight('');
      setDate('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="workout-form-container"> {/* Add a class for styling */}
      <h2>Log a Workout</h2>
      <form onSubmit={handleSubmit} className="workout-form"> {/* Add a class for styling */}
        <select
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          required
          className="form-input"
        >
          <option value="">Select an Exercise</option>
          {exercises.map((ex, index) => (
            <option key={index} value={ex}>
              {ex}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Add Custom Exercise"
          value={customExercise}
          onChange={(e) => setCustomExercise(e.target.value)}
          className="form-input"
        />
        <button type="button" onClick={handleAddCustomExercise} className="form-button">
          Add Exercise
        </button>
        <input
          type="number"
          placeholder="Set count"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit" className="form-button">Add Workout</button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default WorkoutForm;
