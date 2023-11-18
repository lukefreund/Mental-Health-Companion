const express = require('express');
const router = express.Router();
const Journal = require('../models/journalModel');
require('dotenv').config();
const OpenAI = require('openai').default;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

async function monologueRequester(prompt) {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });
  
    return completion.choices[0];
  }

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

    // Concatenate journal entries into a single string
    const journalText = entries.map(entry => entry.entry).join(' \\n ');

    // Create a prompt for OpenAI
    const prompt = `Analyze the following journal entries for their overall emotional sentiment and provide advice: \\n ${journalText}`;

    monologueRequester(prompt).then((gptResp) => {
        res.send(gptResp.message.content);
      }).catch((err) => {
        console.error("Error in OpenAI request:", err);
        res.status(500).json({ message: "Error in processing OpenAI request" });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
