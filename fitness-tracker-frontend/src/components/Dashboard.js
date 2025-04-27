// src/components/Dashboard.js
import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import WorkoutHistory from './WorkoutHistory';
import WorkoutForm from './WorkoutForm';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('workout-history'); // Default to 'workout-history'

  const renderSection = () => {
    if (activeSection === 'workout-history') {
      return <WorkoutHistory />;
    } else if (activeSection === 'log-workout') {
      return <WorkoutForm />;
    }
    return null;
  };

  return (

    <div> 
      <DashboardNavbar />
    <div style={{ maxWidth: '80%', margin: '0 auto' }}> {/* Set max width to 80% */}
     
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
        <button 
          onClick={() => setActiveSection('workout-history')} 
          style={{ textDecoration: 'none', color: 'black', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
          onMouseOver={(e) => e.target.style.color = '#2563eb'}
          onMouseOut={(e) => e.target.style.color = 'black'}
        >
          Workout History
        </button>
        <button 
          onClick={() => setActiveSection('log-workout')} 
          style={{ textDecoration: 'none', color: 'black', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
          onMouseOver={(e) => e.target.style.color = '#2563eb'}
          onMouseOut={(e) => e.target.style.color = 'black'}
        >
          Log a Workout
        </button>
      </div>
      <div>
        {renderSection()}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
