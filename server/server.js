const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HealthCompanionDB', { useNewUrlParser: true, useUnifiedTopology: true });

const express = require('express');
const app = express();
app.use(express.json());
const port = 8080;

const cors = require('cors');
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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
