import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';


const WorkoutHistory = () => {
  const [groupedWorkouts, setGroupedWorkouts] = useState({});
  const [editingWorkout, setEditingWorkout] = useState(null);

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

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/workouts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchWorkouts();
    } catch (err) {
      console.error('Error deleting workout:', err);
    }
  };

  const handleEdit = (workout) => {
    setEditingWorkout(workout);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/api/workouts/${editingWorkout._id}`,
        editingWorkout,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditingWorkout(null);
      fetchWorkouts();
    } catch (err) {
      console.error('Error updating workout:', err);
    }
  };

  useEffect(() => {
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedWorkouts[exercise].map((workout) => (
                    <tr key={workout._id}>
                      <td>{new Date(workout.date).toLocaleDateString()}</td>
                      <td>
                        {editingWorkout && editingWorkout._id === workout._id ? (
                          <input
                            type="number"
                            value={editingWorkout.sets}
                            onChange={(e) =>
                              setEditingWorkout({
                                ...editingWorkout,
                                sets: e.target.value,
                              })
                            }
                          />
                        ) : (
                          workout.sets
                        )}
                      </td>
                      <td>
                        {editingWorkout && editingWorkout._id === workout._id ? (
                          <input
                            type="number"
                            value={editingWorkout.reps}
                            onChange={(e) =>
                              setEditingWorkout({
                                ...editingWorkout,
                                reps: e.target.value,
                              })
                            }
                          />
                        ) : (
                          workout.reps
                        )}
                      </td>
                      <td>
                        {editingWorkout && editingWorkout._id === workout._id ? (
                          <input
                            type="number"
                            value={editingWorkout.weight}
                            onChange={(e) =>
                              setEditingWorkout({
                                ...editingWorkout,
                                weight: e.target.value,
                              })
                            }
                          />
                        ) : (
                          workout.weight
                        )}
                      </td>
                      <td>
                        {editingWorkout && editingWorkout._id === workout._id ? (
                          <button onClick={handleUpdate} className="action-button">
                            <FaSave />
                          </button>
                        ) : (
                          <button onClick={() => handleEdit(workout)} className="action-button">
                            <FaEdit />
                          </button>
                        )}
                        <button onClick={() => handleDelete(workout._id)} className="action-button">
                          <FaTrashAlt />
                        </button>
                      </td>
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