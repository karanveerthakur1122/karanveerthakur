import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-heading">
          <span className="gradient-text">
            DO YOU HAVE A PROJECT TO DISCUSS?
          </span>
        </h2>
        <p className="contact-subheading">GET IN TOUCH</p>
        <div className="contact-info">
          <div>
            <p className="contact-title">CONTACT</p>
            <p className="contact-email">karanveerthakur1122@gmail.com</p>
          </div>
          <div>
            <p className="contact-title">SOCIAL MEDIA</p>
            <div className="social-icons">
            <a href="https://github.com/karanveerthakur1122" target="_blank" rel="noopener noreferrer" title="GitHub">
  <i className="fab fa-github"></i>
</a>

              <a
                href="https://www.linkedin.com/karanveerthakur1122"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/karanveerthakur1122"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/karanveerthakur1122"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/8093687983"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <h3 className="contact-form-title">CONTACT FORM</h3>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="send-button">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
