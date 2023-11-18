const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Path to your user model
const Journal = require('../models/journalModel');


router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET user and their journal entries
router.get('/user/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const journalEntries = await Journal.find({ userId: user._id });
      res.json({ user, journalEntries });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.delete('/user/:id', async (req, res) => {
    try {
      const userId = req.params.id;
  
      // Optional: Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Delete the user
      await User.findByIdAndDelete(userId);
  
      // Delete all journal entries associated with the user
      await Journal.deleteMany({ userId: user._id });
  
      res.json({ message: 'User and their journal entries have been deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
  

module.exports = router;
