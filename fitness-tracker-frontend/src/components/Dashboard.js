// src/components/Dashboard.js
import React from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutHistory from './WorkoutHistory';
import BMICalculator from './BMICalculator'; // Import BMICalculator

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to Your Dashboard</h2>
      <div>
        <WorkoutForm />
        <WorkoutHistory />
        <BMICalculator /> {/* Add BMICalculator */}
      </div>
    </div>
  );
};

export default Dashboard;
