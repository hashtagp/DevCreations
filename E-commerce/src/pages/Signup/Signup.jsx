import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function Signup() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSignInClick = () => {
    setIsActive(false);
  };

  const handleSignUpClick = () => {
    setIsActive(true);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/auth/register`, { username, email, password });
      setToken(response.data.accessToken);
      localStorage.setItem('token', response.data.accessToken);
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('There was an error registering the user!', error);
      alert('Registration failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/auth/login`, { username, password });
      setToken(response.data.accessToken);
      localStorage.setItem('token', response.data.accessToken);
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('There was an error logging in the user!', error);
      alert('Login failed');
    }
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSignup}>
          <h1>Create Account</h1>
          <div className="social-media">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.instagram.com/dev_creationsblr/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/company/dev-creations-and-solutions/"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <button type="submit">Sign Up</button>
          <br />
          <a onClick={() => navigate("/termsandconditions")}>*Terms and Conditions</a>
          {isMobile && (
            <button type="button" onClick={handleSignInClick}>Login</button>
          )}
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="social-media">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.instagram.com/dev_creationsblr/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/company/dev-creations-and-solutions/"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
          <span>or use your email for login</span>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
          {isMobile && (
            <button type="button" onClick={handleSignUpClick}>Create Account</button>
          )}
        </form>
      </div>
      {!isMobile && (
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button id="login" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button id="register" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;