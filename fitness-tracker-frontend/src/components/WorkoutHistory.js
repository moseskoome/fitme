// src/components/WorkoutHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkoutHistory = () => {
  const [groupedWorkouts, setGroupedWorkouts] = useState({});

  const groupByExercise = (data) => {
    const grouped = data.reduce((acc, workout) => {
      if (!acc[workout.exercise]) {
        acc[workout.exercise] = [];
      }
      acc[workout.exercise].push(workout);
      return acc;
    }, {});
    setGroupedWorkouts(grouped);
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/workouts', {
          headers: { Authorization: `Bearer ${token}` },
        });
        groupByExercise(response.data);
      } catch (err) {
        console.error('Error fetching workouts:', err);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="card">
      <h2>Workout History</h2>
      {Object.keys(groupedWorkouts).length === 0 ? (
        <p>No workouts available</p>
      ) : (
        <div>
          {Object.keys(groupedWorkouts).map((exercise) => (
            <div key={exercise} className="exercise-table-container">
              <h3>{exercise}</h3>
              <table className="exercise-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedWorkouts[exercise].map((workout) => (
                    <tr key={workout._id}>
                      <td>{new Date(workout.date).toLocaleDateString()}</td>
                      <td>{workout.sets}</td>
                      <td>{workout.reps}</td>
                      <td>{workout.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutHistory;
