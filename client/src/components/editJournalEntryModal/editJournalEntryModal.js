// EditJournalEntryModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './editJournalEntryModal.css'
import axios from 'axios';

Modal.setAppElement('#root'); // Prevents screen readers from reading background content

const EditJournalEntryModal = ({ isOpen, onRequestClose, entryDetails, onSave }) => {
    const [entry, setEntry] = useState(entryDetails?.entry || ''); // Use entry if available
    const [emotion, setEmotion] = useState(entryDetails?.emotion || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const entryData = {
        entry: entry,
        emotion: emotion,
        userId: localStorage.getItem('userId'), // Make sure entryDetails contains userId
        date: entryDetails.date, // The date should be passed in entryDetails
      };

      const endpoint = entryDetails._id
    ? `http://localhost:8080/journal/${entryDetails._id}`
    : 'http://localhost:8080/journal';

      try {
        const response = entryDetails._id
        ? await axios.put(endpoint, entryData)
        : await axios.post(endpoint, { ...entryData, userId: entryDetails.userId });
    
        onSave(response.data);
        onRequestClose();
      } catch (error) {
        console.error('Error saving journal entry:', error);
        // Handle errors, e.g., show an error message
      }

  };

  useEffect(() => {
    // When entryDetails prop changes, update local state
    setEntry(entryDetails?.entry || '');
    setEmotion(entryDetails?.emotion || '');
  }, [entryDetails]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Journal Entry"
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="entry" className="formLabel">Journal Entry:</label>
          <textarea
            id="entry"
            className="formTextarea"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="emotion" className="formLabel">Emotion:</label>
          <input
            id="emotion"
            className="formInput"
            type="text"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
          />
        </div>
        <div className="formActions">
          <button type="submit" className="formButton saveButton">Save Changes</button>
          <button type="button" onClick={onRequestClose} className="formButton cancelButton">Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditJournalEntryModal;
