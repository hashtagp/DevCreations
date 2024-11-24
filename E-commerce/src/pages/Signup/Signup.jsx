import React, { useState, useEffect } from 'react';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Signup() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isActive, setIsActive] = useState(false);

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

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <br />
          <button type="button">Sign Up</button>
          {isMobile && (
            <button type="button" onClick={handleSignInClick}>Login</button>
          )}
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>or use your email for login</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="button">Sign In</button>
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