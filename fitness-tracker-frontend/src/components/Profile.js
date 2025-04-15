import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe', // Replace with dynamic data later
    height: '',
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    // Add logic to save profile data to backend or state
  };

  return (
    <div style={styles.container}>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div style={styles.field}>
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={profile.height}
            onChange={handleChange}
          />
        </div>
        <div style={styles.field}>
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={profile.weight}
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={styles.button}>Save</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Profile;