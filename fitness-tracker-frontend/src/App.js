import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import WorkoutForm from './components/WorkoutForm';
import WorkoutHistory from './components/WorkoutHistory';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
// Importing Profile component
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // Importing UserProfile component
import AdminDashboard from './components/AdminDashboard'; // Importing AdminDashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          {/* Regular Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> {/* Added route for /home */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout-form" element={<WorkoutForm />} />
          <Route path="/workout-history" element={<WorkoutHistory />} />
          <Route path="/navbar" element={<Navbar />} />
          
          <Route path="/profile" element={<ProtectedRoute element={UserProfile} />} /> {/* Added route for UserProfile */}
          <Route path="/admin-dashboard" element={<ProtectedRoute element={AdminDashboard} />} /> {/* Added route for AdminDashboard */}

          {/* Protected Routes */}
          <Route
            path="/workout-form"
            element={<ProtectedRoute element={WorkoutForm} />}
          />
          <Route
            path="/workout-history"
            element={<ProtectedRoute element={WorkoutHistory} />}
          />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
