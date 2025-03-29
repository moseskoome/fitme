const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
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

// Now require the routes after initializing the app
const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workouts');

// Use authentication routes
app.use('/api/auth', authRoutes);

// Use workout routes
app.use('/api/workouts', workoutRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
