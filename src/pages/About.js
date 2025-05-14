import React from 'react';
import '../css/About.css';
import profilePic from '../files/pic2.jpg';
import Timeline from '../component/Timeline';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section - Profile and Basic Info */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <div className="about-image-container" data-aos="fade-right" data-aos-duration="1000">
            <div className="profile-ring"></div>
            <div className="profile-image">
              <img src={profilePic} alt="Karan Veer Thakur" />
            </div>
          </div>
          
          <div className="about-hero-text" data-aos="fade-left" data-aos-duration="1000">
            <h2 className="section-title">About Me</h2>
            <h3 className="about-subtitle">B.Tech Computer Science and Engineering Student</h3>
            <p className="about-description">
              Hi, I'm Karan Veer Thakur, a B.Tech Computer Science and Engineering student with a strong foundation in object-oriented programming and software development. I'm passionate about building efficient, user-focused applications and continuously improving my skills through real-world projects and self-driven learning. My goal is to create technology solutions that enhance user experiences and bridge the gap between innovation and usability. Explore my portfolio to see projects that reflect my commitment to coding excellence and thoughtful design.
            </p>
            
            <div className="contact-links">
              <a href="mailto:karanveerthakur1122@gmail.com" className="contact-link">
                <FaEnvelope /> karanveerthakur1122@gmail.com
              </a>
              <a href="tel:+918093687983" className="contact-link">
                <FaPhoneAlt /> +91 8093687983
              </a>
              <a href="#" className="contact-link">
                <FaMapMarkerAlt /> Bhubneshwar, Odisha
              </a>
              <a href="https://linkedin.com/in/karanveerthakur1122" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaLinkedin /> linkedin.com/in/karanveerthakur1122
              </a>
              <a href="https://github.com/karanveerthakur1122" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaGithub /> github.com/karanveerthakur1122
              </a>
            </div>
            
            <a href="/files/resume.pdf" download className="btn-download-cv" data-aos="zoom-in" data-aos-delay="300">Download CV</a>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="about-timeline-section">
        <Timeline />
      </section>
      
      {/* Skills Section */}
      <section className="about-skills-section">
        <div className="about-skills-container">
          <div className="skills-section" data-aos="fade-up" data-aos-duration="800">
            <h3 className="skills-title">My Technical Skills</h3>
            <div className="skills-container">
              <div className="skill-item" data-aos="fade-right" data-aos-delay="100">
                <span className="skill-name">Java</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item" data-aos="fade-right" data-aos-delay="200">
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item" data-aos="fade-right" data-aos-delay="300">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" data-aos="fade-right" data-aos-delay="400">
                <span className="skill-name">React</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item" data-aos="fade-right" data-aos-delay="500">
                <span className="skill-name">Data Structures & Algorithms</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item" data-aos="fade-right" data-aos-delay="600">
                <span className="skill-name">Spring Boot</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item" data-aos="fade-right" data-aos-delay="700">
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-item" data-aos="fade-right" data-aos-delay="800">
                <span className="skill-name">SQL</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>        </div>
      </section>
      
      {/* PDF Viewer Modal */}
    </div>
  );
};

export default About;
