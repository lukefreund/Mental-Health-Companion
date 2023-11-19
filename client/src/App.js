import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calendar from "./pages/calendar/Calendar.js";
import Resources from "./pages/resources/Resources.js";
import Journal from "./pages/journal/Journal.js";
import Login from "./pages/login/Login.js";
import ProfilePage from "./pages/profilePage/ProfilePage.js"; // Adjust path as necessary
import Home from "./pages/home/Home.js";
import AnalysisResultPage from "./components/analysisPage/analysisPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/analysis-result" element={<AnalysisResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
