import React from "react";
import "./JournalEntry.css";
import Mood from "../mood/Mood.js";

let input = [];
const JournalEntry = () => {
  const entryClick = () => {};

  return (
    <div className="journal-entry">
      <div className="journal-box">
        <div className="journal-title">
          <h2>Enter Your Journal Entry For The Day:</h2>
        </div>
        <div className="journal-textarea">
          <textarea cols="30" rows="10" placeholder="Type here..." />
        </div>
      </div>
      <div className="journal-button">
        <button onClick={entryClick}>Submit</button>
      </div>
      <div className="mood-selector">
        <Mood />
        <h3 className="message">
          Which Emoticon Describes Your Feelings The Best?
        </h3>
      </div>
    </div>
  );
};
export default JournalEntry;
