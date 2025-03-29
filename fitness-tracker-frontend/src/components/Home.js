import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to the Fitness Tracker App</h2>
      <p>Track your workouts, set goals, and monitor your progress.</p>
      
      <div className="card">
        <h3>Get Started</h3>
        <p>If you're new to the app, sign up to create an account.</p>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>

      <div className="card">
        <h3>Already have an account?</h3>
        <p>Login to access your workout history and tracking features.</p>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </div>

      <div className="card">
        <h3>Features</h3>
        <ul>
          <li>Track your workouts</li>
          <li>Monitor progress with graphs</li>
          <li>Set fitness goals</li>
          <li>Secure account login and management</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
