import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar 
const Home = () => {
  return (
    
    <div>
      <Navbar /> {/* Add Navbar here */}
      <div style={styles.content}>
        <h2>Welcome to FITME progress tracking</h2>
        <p>Track your workouts and achieve your fitness goals!</p>
        
        <img alt="Reach Your Best" src="https://mapmy-static.mapmyfitness.com/2b92b1f2a35141e9ff2f813211466e87.webp" loading="lazy" width="100%" style={styles.image}></img>
      </div>
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
    position: 'relative',
  },
 
  image: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
};


export default Home;