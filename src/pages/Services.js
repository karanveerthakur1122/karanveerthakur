import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode, FaReact, FaDatabase, FaServer,
  FaMobileAlt, FaPaintBrush, FaRocket,
  FaArrowRight, FaCheck, FaBrain
} from 'react-icons/fa';
import '../css/Services.css';

const services = [
  {
    id: 1,
    icon: <FaReact />,
    title: 'Frontend Development',
    description: 'Modern, responsive UIs built with React, TypeScript, and Tailwind CSS. Pixel-perfect designs with smooth animations and optimal performance.',
    highlights: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    icon: <FaServer />,
    title: 'Full Stack Applications',
    description: 'End-to-end web applications with Supabase backend, real-time features, authentication, and database management.',
    highlights: ['Supabase', 'PostgreSQL', 'REST APIs', 'Real-time'],
  },
  {
    id: 3,
    icon: <FaDatabase />,
    title: 'Database Design',
    description: 'Efficient schema design, query optimization, and data modeling with SQL databases focused on scalability and integrity.',
    highlights: ['PostgreSQL', 'SQL', 'Data Modeling', 'Row Level Security'],
  },
  {
    id: 4,
    icon: <FaMobileAlt />,
    title: 'Responsive Web Design',
    description: 'Mobile-first, responsive websites that look perfect on every device. PWA support for native-like app experience.',
    highlights: ['Mobile First', 'PWA', 'Cross-Browser', 'Accessibility'],
  },
  {
    id: 5,
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Clean, modern interfaces with glassmorphism aesthetics, intuitive navigation, and user-centered design principles.',
    highlights: ['Glassmorphism', 'Figma', 'Prototyping', 'Design Systems'],
  },
  {
    id: 6,
    icon: <FaBrain />,
    title: 'AI & Machine Learning',
    description: 'Applied ML research with CNNs and transfer learning. Experience building classification models, data pipelines, and RAG-based applications with LangChain.',
    highlights: ['CNNs / Transfer Learning', 'Python / TensorFlow', 'LangChain / RAG', 'IEEE Published'],
  },
  {
    id: 7,
    icon: <FaCode />,
    title: 'Open Source Development',
    description: 'Building and maintaining open-source projects with clean code, proper documentation, and community-driven development.',
    highlights: ['Git / GitHub', 'CI/CD', 'Code Reviews', 'Documentation'],
  },
];

const process = [
  { step: 1, title: 'Discovery', description: 'Understanding your requirements, goals, and target audience.' },
  { step: 2, title: 'Design', description: 'Creating wireframes and UI mockups with your feedback loop.' },
  { step: 3, title: 'Develop', description: 'Building with clean code, best practices, and regular updates.' },
  { step: 4, title: 'Deliver', description: 'Testing, deployment, and post-launch support to ensure success.' },
];

const Services = () => {
  return (
    <div className="svc-page">
      {/* ── Hero ── */}
      <section className="svc-hero">
        <div className="svc-hero-orb svc-orb-1" />
        <div className="svc-hero-orb svc-orb-2" />

        <div className="svc-hero-panel">
          <div className="svc-panel-shine" />
          <div className="svc-panel-edge" />

          <div className="svc-hero-content">
            <span className="svc-tag">SERVICES</span>
            <h1 className="svc-title">What I Do</h1>
            <p className="svc-subtitle">
              I build modern, performant web applications with clean code and stunning interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="svc-grid-section">
        <div className="svc-grid">
          {services.map((svc) => (
            <div className="svc-card" key={svc.id}>
              <div className="svc-card-icon">{svc.icon}</div>
              <h3 className="svc-card-title">{svc.title}</h3>
              <p className="svc-card-desc">{svc.description}</p>
              <ul className="svc-card-list">
                {svc.highlights.map((h, i) => (
                  <li key={i}><FaCheck className="svc-check" /> {h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="svc-process">
        <div className="svc-process-orb svc-porb-1" />
        <div className="svc-process-orb svc-porb-2" />

        <div className="svc-process-panel">
          <div className="svc-panel-shine" />
          <div className="svc-panel-edge" />

          <div className="svc-process-header">
            <span className="svc-tag">WORKFLOW</span>
            <h2 className="svc-process-heading">How I Work</h2>
            <p className="svc-process-subtitle">A simple, transparent process from idea to launch.</p>
          </div>

          <div className="svc-steps">
            {process.map((p, i) => (
              <div className="svc-step" key={p.step}>
                <div className="svc-step-num">{p.step}</div>
                <div className="svc-step-content">
                  <h3 className="svc-step-title">{p.title}</h3>
                  <p className="svc-step-desc">{p.description}</p>
                </div>
                {i < process.length - 1 && <div className="svc-step-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div className="svc-cta-panel">
          <div className="svc-panel-shine" />
          <h2 className="svc-cta-heading">Have a project in mind?</h2>
          <p className="svc-cta-text">Let's turn your idea into a beautiful, working product.</p>
          <div className="svc-cta-actions">
            <Link to="/contact" className="svc-cta-btn svc-cta-primary">
              Get In Touch <FaArrowRight />
            </Link>
            <Link to="/portfolio" className="svc-cta-btn svc-cta-secondary">
              View My Work <FaRocket />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
