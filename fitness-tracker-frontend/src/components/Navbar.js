import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>FITME </h1>
      <div style={styles.navLinks}>
      
        <Link to="/login" style={styles.link}>
          LOGIN
        </Link>
        <Link to="/signup" style={styles.link}>
          SIGN UP
        </Link>
      </div>
    </nav>
  );
};

// Inline styles for simplicity
const styles = {
  navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2rem',
      backgroundColor: '#e9eff1', // Match body background color
      color: '#222',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#222',
      textDecoration: 'none',
  },
  navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
  },
  link: {
      color: '#222',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.2s ease-in-out',
      '&:hover': {
          color: '#2563eb',
      },
  },
};

export default Navbar;