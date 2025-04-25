// src/components/Dashboard.js
import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import WorkoutHistory from './WorkoutHistory';

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar /> {/* Add DashboardNavbar here */}
      <h2>Dashboard</h2>
      <div>
        <WorkoutHistory />  
      </div>
    </div>
  );
};

export default Dashboard;
