const express = require('express');
const TrainerApplication = require('../models/TrainerApplication');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

// Submit a trainer request
router.post('/', authMiddleware, async (req, res) => {
  const { certificationUrl } = req.body;
  try {
    const newRequest = new TrainerApplication({
      userId: req.user.id,
      certificationUrl,
    });
    await newRequest.save();
    res.status(201).json({ message: 'Trainer request submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting trainer request', error: err.message });
  }
});

// Fetch all trainer requests (Admin only)
router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const requests = await TrainerApplication.find().populate('userId', 'name email');
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching trainer requests', error: err.message });
  }
});

// Update trainer request status (Approve/Reject)
router.patch('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { status } = req.body;
  try {
    const request = await TrainerApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!request) {
      return res.status(404).json({ message: 'Trainer request not found' });
    }
    res.status(200).json({ message: 'Trainer request updated successfully', request });
  } catch (err) {
    res.status(500).json({ message: 'Error updating trainer request', error: err.message });
  }
});

module.exports = router;