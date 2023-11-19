const express = require('express');
const router = express.Router();
const Journal = require('../models/journalModel');
const User = require('../models/userModel'); // Ensure this path is correct


// POST
router.post('/journal', async (req, res) => {
    try {
        // Check if the user exists
        const user = await User.findById(req.body.userId);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
      const newEntry = new Journal(req.body);
      const savedEntry = await newEntry.save();
      res.status(201).json(savedEntry);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});
  
router.get('/journal/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { date } = req.query; // Expecting a date in 'YYYY-MM-DD' format

    // Parse the date and create a date range for the whole day
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0); // Start of the day
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1); // End of the day

    const entries = await Journal.find({
      userId: userId,
      date: { $gte: startDate, $lt: endDate }
    });

    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT
router.put('/journal/:id', async (req, res) => {
    try {
      const updatedEntry = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedEntry);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

// DELETE
router.delete('/journal/:id', async (req, res) => {
    try {
      await Journal.findByIdAndDelete(req.params.id);
      res.json({ message: 'Deleted journal entry' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
  
module.exports = router;