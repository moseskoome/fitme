import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar
import BMICalculator from './BMICalculator'; 
const Home = () => {
  return (
    
    <div>
      <Navbar /> {/* Add Navbar here */}
      <div style={styles.content}>
        <h2>Welcome to FITME progress tracking</h2>
        <p>Track your workouts and achieve your fitness goals!</p>
        <img src="\assets\Screenshot (49).png" alt="Fitness tracking" style={{ width: '100%', maxWidth: '500px', marginTop: '20px' }} />
      </div>
      <BMICalculator />
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  content: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default Home;