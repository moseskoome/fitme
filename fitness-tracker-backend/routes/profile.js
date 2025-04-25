const express = require('express');
const Profile = require('../models/Profile');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create or update profile
router.post('/', authMiddleware, upload.single('profilePic'), async (req, res) => {
  const { age, weight, height, city, country } = req.body;
  const profilePic = req.file ? {
    data: req.file.buffer,
    contentType: req.file.mimetype,
  } : undefined;

  try {
    let profile = await Profile.findOne({ userId: req.user.id });
    if (profile) {
      // Update existing profile
      profile.age = age;
      profile.weight = weight;
      profile.height = height;
      profile.city = city;
      profile.country = country;
      if (profilePic) profile.profilePic = profilePic;
      await profile.save();
      return res.json(profile);
    }

    // Create new profile
    profile = new Profile({
      userId: req.user.id,
      age,
      weight,
      height,
      city,
      country,
      profilePic,
    });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    console.error('Error saving profile:', err.message);
    res.status(500).json({ message: 'Error saving profile', error: err.message });
  }
});

// Get profile
router.get('/', authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
    console.error('Error fetching profile:', err.message); // Log the error
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
});

// Debugging route to verify middleware
router.get('/debug', authMiddleware, (req, res) => {
  res.json({ message: 'Middleware is working', userId: req.user.id });
});

module.exports = router;