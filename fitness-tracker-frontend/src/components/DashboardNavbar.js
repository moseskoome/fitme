import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useState } from 'react'; // Import useState for toggle functionality

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>FITME</h1>
      <div style={styles.hamburger} onClick={toggleMenu}> {/* Hamburger menu */}
        <div style={styles.line}></div>
        <div style={styles.line}></div>
        <div style={styles.line}></div>
      </div>
      <div style={{ ...styles.linksContainer, display: isMenuOpen ? 'flex' : 'none' }}> {/* Toggle links */}
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/" onClick={handleLogout} style={styles.link}>Logout</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 2rem',
    backgroundColor: '#e9eff1', // Match body background color
    color: '#222',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#222',
    textDecoration: 'none',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: '#e9eff1', // Match body background color
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  link: {
    color: '#222',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.2s ease-in-out',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30px',
    height: '20px',
    cursor: 'pointer',
  },
  line: {
    width: '100%',
    height: '3px',
    backgroundColor: '#222',
  },
};

export default DashboardNavbar;