import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calendar from './pages/calendar/Calendar.js';
import Resources from './pages/resources/Resources.js';
import Home from './pages/home/Home.js';
import Navbar from './components/navbar/Navbar.js';
import AuthPage from './pages/authPage/authPage.js';
import ProfilePage from './pages/profile/profile.js'; // Adjust path as necessary




const App = () => {
    return (
          <Router>

            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            
          </Router>
    );
};

export default App;
