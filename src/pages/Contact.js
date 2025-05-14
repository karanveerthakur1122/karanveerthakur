import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isSubmitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a backend service here
    
    // Simulate form submission success for demonstration
    setFormStatus({
      message: 'Thank you! Your message has been sent successfully.',
      isSuccess: true,
      isSubmitted: true
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (    <div className="contact-container">      <div className="contact-header" data-aos="fade-down" data-aos-duration="800">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-description">
          Let's connect and discuss opportunities
        </p>
      </div>
      
      <div className="contact-content">        <div className="contact-info" data-aos="fade-right" data-aos-duration="1000">
          <h3 className="info-title">Let's get in touch</h3>
          <p className="info-description">
            I'm always interested in connecting with fellow students, faculty, or potential employers for internships, projects, 
            or collaborative learning opportunities. Feel free to reach out with any questions or just to say hello!
          </p>
          
          <div className="contact-details">
            <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Bhubneshwar, Odisha, India</p>
              </div>
            </div>
              <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+91 8093687983</p>
              </div>
            </div>              <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>karanveerthakur1122@gmail.com</p>
              </div>
            </div>
          </div>
            <div className="social-links" data-aos="fade-up" data-aos-delay="400">
            <a href="https://linkedin.com/in/karanveerthakur1122" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
            <a href="https://github.com/karanveerthakur1122" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
        </div>
        
        <div className="contact-form-container" data-aos="fade-left" data-aos-duration="1000">
          <h3 className="form-title">Send me a message</h3>
          
          {formStatus.isSubmitted && (
            <div className={`form-message ${formStatus.isSuccess ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
