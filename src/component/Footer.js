import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3 className="footer-title">Karan Veer Thakur</h3>
          <p className="footer-description">
            B.Tech Computer Science and Engineering student , passionate about
            programming and creating user-centric experiences.
          </p>
          <div className="footer-social">
            <a href="https://linkedin.com/in/karanveerthakur1122" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/karanveerthakur1122" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="mailto:karanveerthakur1122@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="footer-section nav-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/hire-me">Work With Me</Link></li>
          </ul>
        </div>
          <div className="footer-section contact-section">
          <h3 className="footer-title">Contact Info</h3>
          <div className="footer-contact-item">
            <div className="contact-icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <span>Bhubneshwar, Odisha, India</span>
          </div>
          <div className="footer-contact-item">
            <div className="contact-icon-wrapper">
              <FaPhone className="contact-icon" />
            </div>
            <span>+91 8093687983</span>
          </div>
          <div className="footer-contact-item">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <span>karanveerthakur1122@gmail.com</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear} Karan Veer Thakur. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
