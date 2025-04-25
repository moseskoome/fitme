const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
const path = require('path'); // Import path module
const authenticate = require('./middleware/authMiddleware'); // Import the authenticate middleware

// Initialize dotenv and Express app
dotenv.config();
const app = express();

// Enable CORS
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('Fitness Tracker API');
});

// Serve the uploads directory as a static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// require the routes after initializing the app
const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workouts');
const profileRoutes = require('./routes/profile'); // Import profile routes
const adminRoutes = require('./routes/admin'); // Import admin routes

// Use authentication routes
app.use('/api/auth', authRoutes);

// Use workout routes
app.use('/api/workouts', workoutRoutes);

// Ensure the profile routes are correctly registered
app.use('/api/profile', profileRoutes);

// Register admin routes
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
