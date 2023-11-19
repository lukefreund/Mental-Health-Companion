import React, { useState } from 'react';
import './JournalEntry.css';
import Mood from '../mood/Mood.js';
import axios from 'axios';

const JournalEntry = () => {
  const [entryText, setEntryText] = useState(''); // State to hold the text of the journal entry
  const [mood, setMood] = useState(''); // State to hold the selected mood

  const entryClick = async () => {
    const userId = localStorage.getItem('userId'); // Get the user ID from local storage
    if (!entryText.trim() || !mood) {
      alert("Please complete the journal entry and select a mood.");
      return;
    }
  
    const formattedDate = new Date().toISOString().split('T')[0];

    // Example API call to check for existing entry
    try {
      // Update the API call to match your backend route
      const response = await axios.get(`http://localhost:8080/journal/${userId}?date=${formattedDate}`);
      if (response.data.length > 0) {
        alert("You have already submitted an entry for today.");
        return;
      }
    } catch (error) {
      console.error('Error checking existing entry:', error);
      // Handle errors, e.g., show an error message
      return;
    }

    // Here you would replace with your actual API endpoint
    const endpoint = `http://localhost:8080/journal`;

    try {
      // Make a POST request to save the journal entry
      const response = await axios.post(endpoint, {
        userId: localStorage.getItem('userId'),
        entry: entryText,
        emotion: mood,
        // date: new Date().toISOString().split('T')[0], // Format date as 'YYYY-MM-DD'
      });

      // Handle the response here
      console.log('Journal entry saved:', response.data);
      // Reset the form if needed
      setEntryText('');
      setMood('');
    } catch (error) {
      // Handle the error here
      console.error('Error saving journal entry:', error);
    }
  };

  return (
    <div className="journal-entry">
      <div className="journal-box">
        <div className="journal-title">
          <h2>Enter Your Journal Entry For The Day:</h2>
        </div>
        <div className="journal-textarea">
        <textarea
          cols="30"
          rows="10"
          placeholder="Type here..."
          value={entryText} // Bind textarea to entryText state
          onChange={(e) => setEntryText(e.target.value)} // Update state on change
        />
        </div>
      </div>
      <div className="journal-button">
        <button onClick={entryClick}>Submit</button>
      </div>
      <div className="mood-selector">
        <Mood onSelectMood={setMood}/>
        <h3 className="message">
          Which Emoticon Describes Your Feelings The Best?
        </h3>
      </div>
    </div>
  );
};
export default JournalEntry;
