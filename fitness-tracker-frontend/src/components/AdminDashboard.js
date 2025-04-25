import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]); // State for trainer applications
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        // Fetch users
        const usersResponse = await axios.get('http://localhost:5000/api/admin/users', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(usersResponse.data);

        // Fetch trainer applications
        const applicationsResponse = await axios.get('http://localhost:5000/api/admin/trainer-applications', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setApplications(applicationsResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  const handleApproveTrainer = async (applicationId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `http://localhost:5000/api/admin/approve-trainer/${applicationId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Trainer application approved successfully!');

      // Refresh applications
      setApplications((prev) => prev.filter((app) => app._id !== applicationId));
    } catch (err) {
      setMessage('Error approving trainer application');
      console.error('Error details:', err);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {message && <p>{message}</p>}

      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Trainer Applications</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Certification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application._id}>
              <td>{application.name}</td>
              <td>{application.email}</td>
              <td>
                <a href={application.certificationUrl} target="_blank" rel="noopener noreferrer">
                  View Certification
                </a>
              </td>
              <td>
                <button onClick={() => handleApproveTrainer(application._id)}>
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;