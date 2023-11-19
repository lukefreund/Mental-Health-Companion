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

  router.post('/analyze', async (req, res) => {
    try {
      const { entry, emotion } = req.body; // Get entry and emotion from the request body
  
      // Create a prompt for OpenAI using the provided entry and emotion
      const prompt = `Analyze this journal entry and emotion for personalized advice. Keep it concise. Entry: "${entry}", Emotion: "${emotion}".`;

  
      monologueRequester(prompt).then((gptResp) => {
        res.send(gptResp.message.content); // Send back the OpenAI response
      }).catch((err) => {
        console.error("Error in OpenAI request:", err);
        res.status(500).json({ message: "Error in processing OpenAI request" });
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
