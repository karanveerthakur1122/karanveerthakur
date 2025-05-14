import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import '../css/Home.css';
// Import components
import ToolsGrid from '../component/ToolsGrid';
import FeaturedProjects from '../component/FeaturedProjects';
import Testimonials from '../component/Testimonials';
// Import images
import pic1 from '../files/pic1.png';
import pic2 from '../files/pic2.jpg';
import pic3 from '../files/pic3.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [pic1, pic2, pic3];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goToNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };  return (
    <div className="home-container">
      <div className="slider-container">
        <div className="slide-content" data-aos="fade-right" data-aos-delay="200">
          <h1 className="slide-title">
            <span>Hi, I'm</span>
            <span className="highlight">Karan Veer Thakur</span>
          </h1>
          <h2 className="slide-subtitle">CS Student & Programmer</h2>
          <p className="slide-description">
            Passionate B.Tech Computer Science & Engineering student, crafting user-centric experiences with code.
          </p>
          <div className="slide-buttons">
            <Link to="/portfolio" className="btn-primary">View My Work</Link>
            <Link to="/contact" className="btn-secondary">Contact Me</Link>
          </div>
        </div>
        <div className="slide-image-container" data-aos="fade-left" data-aos-delay="400">
          <div className="slide-image">
            <img 
              src={images[currentImage]} 
              alt={`Karan Veer Thakur - Portfolio ${currentImage + 1}`} 
              className="home-image"
            />
            <div className="image-overlay"></div>
            <div className="image-controls">
              <button className="image-nav prev" onClick={goToPrevImage}>
                &lt;
              </button>
              <button className="image-nav next" onClick={goToNextImage}>
                &gt;
              </button>
            </div>
            <div className="image-indicators">
              {images.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>      {/* Home About Section */}
      <div className="home-about-section">
        <div className="home-about-container">
          <div className="home-about-image" data-aos="fade-right" data-aos-duration="1000">
            <div className="profile-ring"></div>
            <div className="profile-image">
              <img src={pic2} alt="Karan Veer Thakur" />
            </div>
          </div>
          
          <div className="home-about-content" data-aos="fade-left" data-aos-duration="1000">            <h2 className="home-section-title">About Me</h2>
            <h3 className="home-about-subtitle">B.Tech Computer Science Student</h3>
            
            <p className="home-about-description">
              Hi, I’m Karan Veer Thakur, a B.Tech Computer Science and Engineering student with a strong foundation in object-oriented programming and software development.
              I’m passionate about building efficient, user-focused applications and continuously improving my skills through real-world projects and self-driven learning.
              My goal is to create technology solutions that enhance user experiences and bridge the gap between innovation and usability.
              Explore my portfolio to see projects that reflect my commitment to coding excellence and thoughtful design.
            </p>
              <div className="home-about-info">
              <div className="home-info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Karan Veer Thakur</span>
              </div>
              <div className="home-info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">karanveerthakur1122@gmail.com</span>
              </div>
              <div className="home-info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Bhubneshwar, Odisha</span>
              </div>
            </div>              <div className="home-skill-highlights">
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="100">Java</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="200">HTML/CSS</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="300">JavaScript</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="400">React</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="500">DSA</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="600">Python</span>
            </div>              <div className="home-about-buttons">
              <Link to="/about" className="btn-more-about">More About Me</Link>
              <a href="/files/resume.pdf" download className="btn-download-resume">
                <FaDownload className="download-icon" /> Download CV
              </a>
            </div></div>
        </div>      </div>
      
      {/* Tools I use section */}
      <ToolsGrid />
      
      {/* Featured Projects section */}      <FeaturedProjects />      
      {/* Client Testimonials section */}
      <Testimonials />
    </div>
  );
};

export default Home;
