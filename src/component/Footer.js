import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-bg-orb footer-orb-1" />
      <div className="footer-bg-orb footer-orb-2" />

      <div className="footer-glass-panel">
        <div className="footer-panel-shine" />
        <div className="footer-panel-edge" />

        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col">
            <h3 className="footer-brand">Karan Veer Thakur</h3>
            <p className="footer-bio">
              B.Tech Computer Science and Engineering student, passionate about
              programming and creating user-centric experiences.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com/in/karanveerthakur1122" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/karanveerthakur1122" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:karanveerthakur1122@gmail.com" className="footer-social-btn" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/hire-me">Work With Me</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact Info</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <div className="footer-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              <div className="footer-contact-row">
                <div className="footer-icon-box">
                  <FaPhone />
                </div>
                <span>+91 8093687983</span>
              </div>
              <div className="footer-contact-row">
                <div className="footer-icon-box">
                  <FaEnvelope />
                </div>
                <span>karanveerthakur1122@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bar">
          <p className="footer-copy">
            &copy; {currentYear} Karan Veer Thakur. Made with <FaHeart className="footer-heart" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
