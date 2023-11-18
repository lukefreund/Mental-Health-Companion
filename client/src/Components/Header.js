import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Calendar from './Calendar.js';
import Resources from './Resources.js';
import './Header.css';

const Header = () => {
    return (
        <Router>
            <div className="header">
                <div className='header_left'>
                    <img className='logo' src=""/>
                    <a href="#"><h3>Mental Health</h3></a>
                </div>

                <div className='header_center'>
                    <ul className='header_list'>
                    <li><Link to="/"><h3>Home</h3></Link></li>
                        <li><Link to="/Calendar"><h3>Calendar</h3></Link></li>
                        <li><Link to="/Resources"><h3>Resources</h3></Link></li>
                    </ul>
                </div>

                <div className='header_right'>
                    <a href='#'><h3>My Profile</h3></a>
                    <img className="ProfilePic" src="./Component/Icon.jpeg"/>
                </div>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/Resources" element={<Resources />} />
            </Routes>
            
        </Router>
        
    )
}
export default Header;