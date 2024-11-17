import React from "react";
import "./Footer.css";
import logo from "../assets/footer_logo.png"; // Replace with your logo path
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="logo">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Dev Creations" />
        </div>

        <div className="footer-section query">
          <h3>Have Enquiries?</h3>
          <div className="footer-search-bar">
            <input type="email" placeholder="Your E-Mail" />
          </div>
          <div className="submit-container">
            <button>Submit</button>
            <p>We will get back to you soon!</p>
          </div>
        </div>
        </div>
        <div className="info">
        {/* Services Section */}
        <div className="footer-section">
          <h3>OUR SERVICES</h3>
          <ul>
            <li><a href="#!">Educational courses</a></li>
            <li><a href="#!">E-Services</a></li>
            <li><a href="#!">Office Gifts</a></li>
            <li><a href="#!">Design and Printing</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#!">About</a></li>
            <li><a href="#!">FAQ</a></li>
            <li><a href="#!">Collaborations</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h3>LEGAL</h3>
          <ul>
            <li><a href="#!">Terms and Conditions</a></li>
            <li><a href="#!">Return Policy</a></li>
            <li><a href="#!">Support</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>CONTACTS</h3>
          <p>+91 96863 57511</p>
          <ul className="social-links">
            <li><FaLinkedin /></li>
            <li><FaInstagram /></li>
            <li><FaYoutube /></li>
          </ul>
        </div>
        </div>
        </div>


      <div className="footer-bottom">
        <p>© 2024 DevCreations and Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
