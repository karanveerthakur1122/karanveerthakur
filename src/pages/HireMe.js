import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBriefcase, FaLaptopCode, FaChalkboardTeacher,
  FaPaperPlane, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import '../css/HireMe.css';

const types = [
  { key: 'internship', icon: <FaBriefcase />, title: 'Internship', desc: 'For companies looking to hire interns in software development' },
  { key: 'project', icon: <FaLaptopCode />, title: 'Project Collab', desc: 'College or open-source project partnerships' },
  { key: 'mentorship', icon: <FaChalkboardTeacher />, title: 'Mentorship', desc: 'Learning guidance and code reviews for fellow students' },
];

const steps = [
  { num: 1, title: 'Connect', desc: 'We discuss your opportunity, project scope, or mentorship needs.' },
  { num: 2, title: 'Plan', desc: 'We agree on objectives, timeline, and communication frequency.' },
  { num: 3, title: 'Build', desc: 'I apply my technical skills and deliver with regular updates.' },
  { num: 4, title: 'Grow', desc: 'Documentation, feedback, and continuous improvement.' },
];

const HireMe = () => {
  const [activeType, setActiveType] = useState('internship');
  const [form, setForm] = useState({
    name: '', email: '', company: '', duration: '', startDate: '', description: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', company: '', duration: '', startDate: '', description: '' });
    setTimeout(() => setSent(false), 4000);
  }, []);

  return (
    <div className="hm-page">
      {/* ── Hero ── */}
      <section className="hm-hero">
        <div className="hm-hero-orb hm-orb-1" />
        <div className="hm-hero-orb hm-orb-2" />

        <div className="hm-hero-panel">
          <div className="hm-panel-shine" />
          <div className="hm-panel-edge" />
          <div className="hm-hero-content">
            <span className="hm-tag">OPPORTUNITIES</span>
            <h1 className="hm-title">Work With Me</h1>
            <p className="hm-subtitle">
              Let's collaborate on tech projects or discuss internship opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Type Selector ── */}
      <section className="hm-types-section">
        <div className="hm-types">
          {types.map((t) => (
            <button
              key={t.key}
              className={`hm-type-card ${activeType === t.key ? 'active' : ''}`}
              onClick={() => setActiveType(t.key)}
            >
              <div className="hm-type-icon">{t.icon}</div>
              <h3 className="hm-type-title">{t.title}</h3>
              <p className="hm-type-desc">{t.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="hm-body">
        <div className="hm-layout">
          {/* Left: Process */}
          <div className="hm-process-col">
            <div className="hm-process-card">
              <h2 className="hm-section-heading">How It Works</h2>
              <div className="hm-steps">
                {steps.map((s, i) => (
                  <div className="hm-step" key={s.num}>
                    <div className="hm-step-num">{s.num}</div>
                    <div className="hm-step-body">
                      <h3 className="hm-step-title">{s.title}</h3>
                      <p className="hm-step-desc">{s.desc}</p>
                    </div>
                    {i < steps.length - 1 && <div className="hm-step-connector" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="hm-form-col">
            <div className="hm-form-card">
              <h2 className="hm-section-heading">Submit an Opportunity</h2>

              {sent && (
                <div className="hm-success">
                  <FaCheckCircle /> Thank you! I'll review and get back to you soon.
                </div>
              )}

              <form className="hm-form" onSubmit={handleSubmit}>
                <div className="hm-field-row">
                  <div className="hm-field">
                    <label htmlFor="hm-name">Name</label>
                    <input id="hm-name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" autoComplete="name" />
                  </div>
                  <div className="hm-field">
                    <label htmlFor="hm-email">Email</label>
                    <input id="hm-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" autoComplete="email" />
                  </div>
                </div>

                <div className="hm-field-row">
                  <div className="hm-field">
                    <label htmlFor="hm-company">Organization</label>
                    <input id="hm-company" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company or university" />
                  </div>
                  <div className="hm-field">
                    <label htmlFor="hm-duration">Duration</label>
                    <select id="hm-duration" name="duration" value={form.duration} onChange={handleChange} required>
                      <option value="">Select duration</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="hm-field">
                  <label htmlFor="hm-start">Start Date</label>
                  <input id="hm-start" type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
                </div>

                <div className="hm-field">
                  <label htmlFor="hm-desc">Details</label>
                  <textarea id="hm-desc" name="description" value={form.description} onChange={handleChange} required placeholder="Describe the opportunity, project, or mentorship needs..." rows="5" />
                </div>

                <button type="submit" className="hm-submit-btn">
                  <FaPaperPlane /> Submit Request
                </button>
              </form>

              <p className="hm-cta-text">
                Prefer to chat first? <Link to="/contact" className="hm-cta-link">Contact me <FaArrowRight size={11} /></Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireMe;
