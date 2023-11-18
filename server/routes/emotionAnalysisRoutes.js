const express = require('express');
const router = express.Router();
const Journal = require('../models/journalModel');
const Sentiment = require('sentiment'); // Assuming you're using a package like 'sentiment'

router.post('/analyze-weekly', async (req, res) => {
  try {
    const userId = req.body.userId; // or get from user session if authenticated

    // Calculate the start and end dates for the last week
    const currentDate = new Date();
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const startDate = new Date(endDate.getTime() - (7 * 24 * 60 * 60 * 1000)); // Subtracting 7 days
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    const entries = await Journal.find({ 
      userId: userId,
      date: { $gte: startDate, $lte: endDate }
    });
    console.log(entries);

    const sentiment = new Sentiment();
    let totalScore = 0;

    entries.forEach(entry => {
      console.log(entry.entry);
      const result = sentiment.analyze(entry.entry);
      totalScore += result.score;
    });

    const averageScore = totalScore / entries.length;
    let message;

    const threshold = 5;

    if (averageScore > threshold) {
      message = "Your week seems positive! Keep up the good mood!";
    } else if (averageScore < -threshold) {
      message = "It seems like a tough week. Remember to take care of yourself!";
    } else {
      message = "Your week has been fairly balanced. Stay steady!";
    }

    res.json({ analysis: { averageScore, totalEntries: entries.length }, message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
