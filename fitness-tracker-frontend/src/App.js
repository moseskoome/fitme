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
import BMICalculator from './components/BMICalculator';
import Profile from './components/Profile'; // Importing Profile component

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
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/profile" element={<Profile />} /> {/* Added route for Profile */}

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
      </div>
    </Router>
  );
}

export default App;
