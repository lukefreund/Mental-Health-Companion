import React from "react";
import EmotionCalendar from "../../components/emotionCalendar/emotionCalendar.js";
import Navbar from "../../components/navbar/Navbar";

const Calendar = () => {
  return (
    <div className="calendarPage">
      <Navbar />
      {/* You can add a header or other components here */}
      <EmotionCalendar />
      {/* Any additional components can go here */}
    </div>
  );
};
export default Calendar;
