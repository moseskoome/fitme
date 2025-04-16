import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link for navigation

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>FITME</h1>
      <div style={styles.linksContainer}> {/* Add a container for links */}
        <Link to="/workout-form" style={styles.link}>LOG WORKOUT</Link> {/* Replace link to Workout Form */}
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
    </nav>
  );
};

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
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: 'BLACK',
    fontSize: '16px',
  },
  logoutButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default DashboardNavbar;