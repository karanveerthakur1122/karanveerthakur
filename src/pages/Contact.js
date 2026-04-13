import React, { useState, useCallback } from 'react';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaLinkedin, FaGithub, FaTwitter,
  FaPaperPlane, FaCheckCircle
} from 'react-icons/fa';
import '../css/Contact.css';

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Bhubneshwar, Odisha, India' },
  { icon: <FaPhoneAlt />, label: 'Phone', value: '+91 8093687983', href: 'tel:+918093687983' },
  { icon: <FaEnvelope />, label: 'Email', value: 'karanveerthakur1122@gmail.com', href: 'mailto:karanveerthakur1122@gmail.com' },
];

const socials = [
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/karanveerthakur1122', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/karanveerthakur1122', label: 'GitHub' },
  { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  }, []);

  return (
    <div className="ct-page">
      {/* ── Hero ── */}
      <section className="ct-hero">
        <div className="ct-hero-orb ct-orb-1" />
        <div className="ct-hero-orb ct-orb-2" />

        <div className="ct-hero-panel">
          <div className="ct-panel-shine" />
          <div className="ct-panel-edge" />
          <div className="ct-hero-content">
            <span className="ct-tag">CONTACT</span>
            <h1 className="ct-title">Get In Touch</h1>
            <p className="ct-subtitle">
              Have a project, question, or just want to say hi? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="ct-body">
        <div className="ct-layout">
          {/* Left: Info */}
          <div className="ct-info-col">
            <div className="ct-info-card">
              <h2 className="ct-info-heading">Let's Connect</h2>
              <p className="ct-info-text">
                I'm always open to discussing new projects, creative ideas, internship opportunities, 
                or ways to be part of your vision. Drop me a message and I'll get back to you.
              </p>

              <div className="ct-details">
                {contactInfo.map((item, i) => (
                  <div className="ct-detail-row" key={i}>
                    <div className="ct-detail-icon">{item.icon}</div>
                    <div className="ct-detail-text">
                      <span className="ct-detail-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="ct-detail-value ct-detail-link">{item.value}</a>
                      ) : (
                        <span className="ct-detail-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="ct-socials">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ct-social-btn"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="ct-form-col">
            <div className="ct-form-card">
              <h2 className="ct-form-heading">Send a Message</h2>

              {sent && (
                <div className="ct-success">
                  <FaCheckCircle /> Message sent successfully!
                </div>
              )}

              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-field-row">
                  <div className="ct-field">
                    <label htmlFor="ct-name">Name</label>
                    <input
                      id="ct-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-email">Email</label>
                    <input
                      id="ct-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-subject">Subject</label>
                  <input
                    id="ct-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project discussion, internship, etc."
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-message">Message</label>
                  <textarea
                    id="ct-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or idea..."
                    rows="5"
                  />
                </div>

                <button type="submit" className="ct-submit-btn">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
