import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
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
    padding: '10px 20px',
    backgroundColor: '#66EF10',
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
    color: 'black',
    textDecoration: 'none',
    fontSize: '18px',
    
  },
};

export default Navbar;