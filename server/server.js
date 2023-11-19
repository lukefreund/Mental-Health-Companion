const mongoose = require("mongoose");
const connectDB = require("./config/dbConn.js");
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

connectDB();

app.use(express.json());
app.use(cors());

const journalRoutes = require('./routes/journalRoutes');
app.use(journalRoutes); // Use the journal routes

const userRegistrationRoutes = require('./routes/userRegistrationRoutes');
app.use(userRegistrationRoutes);

const emotionAnalysisRoutes = require('./routes/emotionAnalysisRoutes');
app.use(emotionAnalysisRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
