// ProfilePage.js
import React from 'react';
import './profile.css'; // Assuming you have a CSS file for styling

const ProfilePage = () => {
  const email = localStorage.getItem('email');
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Password:</strong> {password}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
