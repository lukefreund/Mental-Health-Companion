// EmotionCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './emotionCalendar.css'; // Your custom CSS

const EmotionCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entryDetails, setEntryDetails] = useState('Select a date to see journal details.');

  const handleDayClick = (value, event) => {
    setSelectedDate(value);
    // TODO: Fetch and display journal data for selected date
    setEntryDetails('Journal entry details for ' + value.toDateString());
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
          <p>{entryDetails || 'Select a date to see journal details.'}</p>
        </div>
      </div>
    </div>
  );
};

export default EmotionCalendar;
