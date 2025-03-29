import React, { useState } from 'react';
import axios from 'axios';

const WorkoutForm = () => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');

  const exercises = ['Push-up', 'Squat', 'Deadlift', 'Bench Press', 'Pull-up'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/workouts',
        { exercise, sets, reps, weight },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Workout added successfully!');
      setExercise('');
      setSets('');
      setReps('');
      setWeight('');
    } catch (err) {
      setMessage(err.response.data.message || 'Something went wrong');
    }
  };

  return (
    <div className="card">
      <h2>Log a Workout</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          required
        >
          <option value="">Select an Exercise</option>
          {exercises.map((ex, index) => (
            <option key={index} value={ex}>
              {ex}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <button type="submit">Add Workout</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default WorkoutForm;
