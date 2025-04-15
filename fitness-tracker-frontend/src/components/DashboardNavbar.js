import { useNavigate } from 'react-router-dom';

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>FITME</h1>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
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