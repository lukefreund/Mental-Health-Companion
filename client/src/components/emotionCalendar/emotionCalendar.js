// EmotionCalendar.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './emotionCalendar.css'; // Your custom CSS
import EditJournalEntryModal from '../editJournalEntryModal/editJournalEntryModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmotionCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entryDetails, setEntryDetails] = useState('Select a date to see journal details.');
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({});
  const [loading, setLoading] = useState(false); // New state for loading status
  const navigate = useNavigate(); // Hook to navigate to different routes
  const userId = localStorage.getItem('userId');

  const handleDeleteEntry = async (entryId) => {
    if (!entryId) {
      alert('No entry selected for deletion.');
      return;
    }
  
    try {
      const response = await axios.delete(`http://localhost:8080/journal/${entryId}`);
      console.log(response.data);
      alert('Journal entry deleted successfully.');
      
      // Update the local state to reflect the deletion
      setEntryDetails('Select a date to see journal details.');
      setCurrentEntry({});
      fetchJournalEntry(selectedDate); // Refresh entries after deletion
    } catch (error) {
      console.error('Error deleting journal entry:', error);
      alert('Failed to delete the journal entry.');
    }
  };

  const handleAnalyzeClick = async () => {
    try {
      if (!currentEntry.entry.trim() || !currentEntry.emotion.trim()) {
        alert("Please ensure both entry and emotion are filled out before analysis.");
        return; // Exit the function if either is empty
      }

      setLoading(true); // Start loading
      const response = await axios.post('http://localhost:8080/analyze', {
        entry: currentEntry.entry,
        emotion: currentEntry.emotion
      });
      navigate('/analysis-result', { state: { analysisResult: response.data } });
    } catch (error) {
      console.error('Error analyzing journal entry:', error);
      // Handle error, e.g., show error message to user
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleEditClick = (entry) => {
    setCurrentEntry(entry);
    setShowEditModal(true);
    console.log('Edit button clicked');
    // For example, open a modal or navigate to an editing page
  };

  const handleSaveChanges = (updatedEntry) => {
    // Update the local state with the updated entry details
    setEntryDetails(formatEntryDetails(updatedEntry));
    setCurrentEntry(updatedEntry); // Update currentEntry with the updated entry
  
    // Close the edit modal
    setShowEditModal(false);
  
    // Refetch the entries for the selected date to update the display
    fetchJournalEntry(selectedDate);
  };

  useEffect(() => {
    if (userId) {
      fetchJournalEntry(selectedDate);
    }
  }, [selectedDate, userId]);

  const formatEntryDetails = (entry) => {
    return (
      <>
        <div className="journalEntryTitle">Journal Entry:</div>
        <div className="journalEntryText">{entry.entry}</div>
        <div className="emotionTitle">Emotion:</div>
        <div className="emotionText">{entry.emotion}</div>
      </>
    );
  };

  const fetchJournalEntry = async (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
    try {
      const response = await fetch(`http://localhost:8080/journal/${userId}?date=${formattedDate}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.length > 0) {
        setEntryDetails(formatEntryDetails(data[0]));
        setCurrentEntry(data[0]);
      } else {
        setEntryDetails('No journal entry for this date.');
        setCurrentEntry({
          entry: '',
          emotion: '',
          date: date.toISOString().split('T')[0], // ISO string format 'YYYY-MM-DD'
          userId: userId, // Assuming you have the userId state from somewhere
        });
      }
    } catch (error) {
      console.error('Error fetching journal entry:', error);
      setEntryDetails('Error fetching journal entry.');
      setCurrentEntry(null);
    }
  };

  const handleDayClick = (value, event) => {
    setSelectedDate(value);
  };

  return (
    <div className="emotionCalendar">
      <div>
        <Calendar
          onChange={handleDayClick}
          value={selectedDate}
          // More properties and event handlers as needed
        />
      </div>
      <div className="journalDetailsContainer">
        <div className="journalDetails">
          <h3>Selected Date: {selectedDate.toDateString()}</h3>
          <p>{entryDetails}</p>
          <div className="actionButtons">
            <button className="editButton" onClick={() => handleEditClick(currentEntry)}>Edit Entry</button>
            <button className="deleteButton" onClick={() => handleDeleteEntry(currentEntry._id)}>Delete Entry</button>
            <button className="analyzeButton" onClick={handleAnalyzeClick} disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze Entry'}
            </button>
          </div>
          {loading && <div className="loader">Loading...</div>} {/* Loader Element */}
        </div>
        <EditJournalEntryModal
        isOpen={showEditModal}
        onRequestClose={() => setShowEditModal(false)}
        entryDetails={currentEntry}
        onSave={handleSaveChanges}
      />
      </div>
    </div>
  );
};

export default EmotionCalendar;
