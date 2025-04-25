import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    profilePic: '',
    dateOfBirth: '',
    sex: '',
    height: '',
    weight: '',
    city: '',
    country: '',
    age: '',
  });
  const [message, setMessage] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log("Token being sent:", token);
      const response = await axios.get('http://localhost:5000/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile({
        profilePic: response.data.profilePic || '',
        dateOfBirth: response.data.dateOfBirth || '',
        sex: response.data.sex || '',
        height: response.data.height || '',
        weight: response.data.weight || '',
        city: response.data.city || '',
        country: response.data.country || '',
        age: response.data.age || '',
      });
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePic: file });
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      Object.keys(profile).forEach((key) => {
        formData.append(key, profile[key]);
      });

      await axios.post('http://localhost:5000/api/profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Profile updated successfully!');
    } catch (err) {
      setMessage('Error updating profile');
      console.error('Error details:', err.response ? err.response.data : err.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.imageContainer}>
          {previewImage ? (
            <img src={previewImage} alt="Profile Preview" style={styles.image} />
          ) : (
            <p>No profile picture</p>
          )}
          <input type="file" name="profilePic" onChange={handleImageChange} />
        </div>
        <input
          type="date"
          name="dateOfBirth"
          value={profile.dateOfBirth}
          onChange={handleInputChange}
          placeholder="Date of Birth"
          style={styles.input}
        />
        <select
          name="sex"
          value={profile.sex}
          onChange={handleInputChange}
          style={styles.input}
        >
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          name="height"
          value={profile.height}
          onChange={handleInputChange}
          placeholder="Height (cm)"
          style={styles.input}
        />
        <input
          type="number"
          name="weight"
          value={profile.weight}
          onChange={handleInputChange}
          placeholder="Weight (kg)"
          style={styles.input}
        />
        <input
          type="text"
          name="city"
          value={profile.city}
          onChange={handleInputChange}
          placeholder="City"
          style={styles.input}
        />
        <input
          type="text"
          name="country"
          value={profile.country}
          onChange={handleInputChange}
          placeholder="Country"
          style={styles.input}
        />
        <input
          type="number"
          name="age"
          value={profile.age}
          onChange={handleInputChange}
          placeholder="Age"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Save Profile
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    color: 'green',
    textAlign: 'center',
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
};

export default UserProfile;