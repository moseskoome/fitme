// src/components/Dashboard.js
import React from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutHistory from './WorkoutHistory';
import BMICalculator from './BMICalculator'; // Import BMICalculator
import DashboardNavbar from './DashboardNavbar';

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar /> {/* Add DashboardNavbar here */}
      <h2>Dashboard</h2>
      <div>
        <WorkoutForm />
        <WorkoutHistory />
        <BMICalculator /> {/* Add BMICalculator */}
      </div>
    </div>
  );
};

export default Dashboard;
