import React, { useState } from "react";
import "./Mood.css";

const Mood = ({ onSelectMood }) => {
  // Receive onSelectMood as a prop
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodChange = (event) => {
    const selectedMoodValue = event.target.value;
    setSelectedMood(selectedMoodValue);
    onSelectMood(selectedMoodValue);
  };

  const getMoodMessage = () => {
    switch (selectedMood) {
      case "Ecstatic":
        return "Ecstatic!";
      case "Happy":
        return "Happy!";
      case "Neutral":
        return "Neutral";
      case "Sad":
        return "Sad";
      case "Angry":
        return "Angry";
      default:
        return "";
    }
  };
  return (
    <div>
      <fieldset class="mood">
        <label class="mood__label" style={{ height: "30px" }}>
          <input
            name="mood"
            type="radio"
            value="Ecstatic"
            onChange={handleMoodChange}
          />
          <svg class="mood__icon_1">
            <use xlinkHref="#mood1"></use>
          </svg>
        </label>
        <label class="mood__label" style={{ height: "30px" }}>
          <input
            name="mood"
            type="radio"
            value="Happy"
            onChange={handleMoodChange}
          />
          <svg class="mood__icon_2">
            <use xlinkHref="#mood2"></use>
          </svg>
        </label>
        <label class="mood__label" style={{ height: "30px" }}>
          <input
            name="mood"
            type="radio"
            value="Neutral"
            onChange={handleMoodChange}
          />
          <svg class="mood__icon_3">
            <use xlinkHref="#mood3"></use>
          </svg>
        </label>
        <label class="mood__label" style={{ height: "30px" }}>
          <input
            name="mood"
            type="radio"
            value="Sad"
            onChange={handleMoodChange}
          />
          <svg class="mood__icon_4">
            <use xlinkHref="#mood4"></use>
          </svg>
        </label>
        <label class="mood__label" style={{ height: "30px" }}>
          <input
            name="mood"
            type="radio"
            value="Angry"
            onChange={handleMoodChange}
          />
          <svg class="mood__icon_5">
            <use xlinkHref="#mood5"></use>
          </svg>
        </label>
      </fieldset>
      {selectedMood && (
        <div className="mood-message">
          <p>{getMoodMessage()}</p>
        </div>
      )}

      <svg>
        <symbol id="common" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="75" fill="currentColor" stroke-width="8" />
          <circle cx="52.3" cy="59.3" r="10.4" />
          <circle cx="106.7" cy="59.3" r="10.4" />
        </symbol>
        <symbol id="mood1" viewBox="0 0 160 160">
          <use xlinkHref="#common"></use>
          <path d="M79.7,133.7c-25.1,0-45.5-20.4-45.5-45.5v-4h91v4C125.2,113.3,104.8,133.7,79.7,133.7z M42.4,92.2 c2,18.8,18,33.5,37.3,33.5C99,125.7,115,111,117,92.2H42.4z" />
        </symbol>
        <symbol id="mood2" viewBox="0 0 160 160">
          <use xlinkHref="#common"></use>
          <path d="M79.3,127.2c-18.2,0-34.9-9.2-44.7-24.5l7.2-4.6c8.2,12.9,22.2,20.6,37.5,20.6c15.3,0,29.3-7.7,37.5-20.6 l7.2,4.6C114.2,118,97.5,127.2,79.3,127.2z" />
        </symbol>
        <symbol id="mood3" viewBox="0 0 160 160">
          <use xlinkHref="#common"></use>
          <rect x="34.2" y="100" width="86.9" height="8.2" />
        </symbol>
        <symbol id="mood4" viewBox="0 0 160 160">
          <use xlinkHref="#common"></use>
          <path d="M79,98.1c18.2,0,34.9,9.2,44.7,24.5l-7.2,4.6c-8.2-12.9-22.2-20.6-37.5-20.6c-15.3,0-29.3,7.7-37.5,20.6 l-7.2-4.6C44.2,107.3,60.9,98.1,79,98.1z" />
        </symbol>
        <symbol id="mood5" viewBox="0 0 160 160">
          <use xlinkHref="#common"></use>
          <path d="M122.3,125.3H35.1v-4c0-24,19.6-43.6,43.6-43.6c24,0,43.6,19.6,43.6,43.6V125.3z M43.4,117.3h70.7 c-2-17.7-17.1-31.6-35.4-31.6C60.5,85.7,45.4,99.5,43.4,117.3z" />
          <rect
            x="88.8"
            y="35.5"
            transform="matrix(0.9229 -0.3851 0.3851 0.9229 -7.2817 42.853)"
            width="29.1"
            height="8.2"
          />
          <rect
            x="50"
            y="25"
            transform="matrix(0.3851 -0.9229 0.9229 0.3851 -3.292 74.2763)"
            width="8.2"
            height="29.1"
          />
        </symbol>
      </svg>
    </div>
  );
};

export default Mood;
