import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import IconLogo from '../../images/Icon.jpeg';

const Navbar = () => {
    return (
            <div className="header">
                <div className='header_left'>
                    <img className='logo' src=""/>
                    <Link to="/"><h3>Mental Health</h3></Link>
                </div>

                <div className='header_center'>
                    <ul className='header_list'>
                        <li><Link to="/"><h3>Home</h3></Link></li>
                        <li><Link to="/calendar"><h3>Calendar</h3></Link></li>
                        <li><Link to="/resources"><h3>Resources</h3></Link></li>
                    </ul>
                </div>

                <div className='header_right'>
                    <Link to="/"><h3>My Profile</h3></Link>
                   <img className="ProfilePic" src=""/>
                </div>

            </div>
            
        
    )
}
export default Navbar;