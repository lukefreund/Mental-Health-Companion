// AuthPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './authPage.css';
import { useNavigate } from 'react-router-dom';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("here");
    event.preventDefault();
    const endpoint = isLogin ? 'http://localhost:8080/login' : 'http://localhost:8080/register';
    const userData = isLogin ? { email, password } : { email, username, password };
    console.log(userData);

    try {
      const response = await axios.post(endpoint, userData);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('password', response.data.password);
      console.log(response.data);
      
      // If signing up, automatically log in or confirm account creation
      if (!isLogin) {
        setIsLogin(true);
      }
      else {
        navigate('/'); // Redirect to the home page
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      // Handle errors, possibly show user feedback
    }
  };

  return (
    <div className="auth-page">
      <h2 className="auth-page__title">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="auth-page__form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="auth-page__input"
        />
        {!isLogin && (
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="auth-page__input"
          />
        )}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="auth-page__input"
        />
        <button type="submit" className="auth-page__button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button 
        onClick={() => setIsLogin(!isLogin)}
        className="auth-page__toggle"
      >
        {isLogin ? 'Need to create an account?' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default AuthPage;
