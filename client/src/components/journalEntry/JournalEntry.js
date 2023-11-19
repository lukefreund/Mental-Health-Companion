import React from 'react';
import './JournalEntry.css';

const JournalEntry = () => {

    const entryClick = () => {
        
    }

    return (
        <div className='journal-container'>
            <div className="journal-entry">
                <div className='journal-title'>
                    <h2>Journal Entry</h2>
                </div>
                <textarea className='journal-textarea' name="message" id="" cols="30" rows="10" placeholder="Hi friend! How are you feeling today?"/>
                <button className='journal-button' onClick={entryClick}>Submit</button>
            </div>
        </div>
    )
}
export default JournalEntry;
