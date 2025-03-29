import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import WorkoutForm from './components/WorkoutForm';
import WorkoutHistory from './components/WorkoutHistory';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Fitness Tracker</h1>
        <Routes>
          {/* Regular Routes */}
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
