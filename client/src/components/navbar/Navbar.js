import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header_left">
        <h3>Mental Health</h3>
      </div>

      <div className="header_center">
        <ul className="header_list">
          <li>
            <Link to="/home">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/journal">
              <h3>Journal</h3>
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <h3>Calendar</h3>
            </Link>
          </li>
          <li>
            <Link to="/resources">
              <h3>Resources</h3>
            </Link>
          </li>
        </ul>
      </div>

      <div className="header_right">
        <Link to="/profile">
          <h3>Profile</h3>
        </Link>
        <img className="ProfilePic" src="" />
      </div>
    </div>
  );
};
export default Navbar;
