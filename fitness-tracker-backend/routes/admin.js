const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Middleware to check admin role
const adminMiddleware = async (req, res, next) => {
  console.log('Admin Middleware: Checking user role'); // Debugging log
  console.log('User details:', req.user); // Log user details

  if (req.user.role !== 'Admin') {
    console.log('Access denied: User is not an Admin'); // Log access denial
    return res.status(403).json({ message: 'Access denied' });
  }

  console.log('Access granted: User is an Admin'); // Log access granted
  next();
};

// Get all users
router.get('/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Approve a user as trainer
router.post('/approve-trainer/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.role = 'Trainer';
    await user.save();
    res.json({ message: 'User approved as trainer' });
  } catch (err) {
    res.status(500).json({ message: 'Error approving trainer' });
  }
});

module.exports = router;