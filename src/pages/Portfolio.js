import React, { useState, useCallback } from 'react';
import { FaGithub, FaGlobe, FaEye, FaTimes } from 'react-icons/fa';
import '../css/Portfolio.css';
import LivePreview from '../component/LivePreview';
import ProjectBanner from '../component/ProjectBanner';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'react', label: 'React' },
  { key: 'ml', label: 'AI / ML' },
];

const projects = [
  {
    id: 1,
    title: 'WisperVault Phantom',
    category: 'fullstack',
    description: 'End-to-end encrypted ephemeral messaging app. Anonymous, secure, and temporary — messages self-destruct after being read.',
    link: 'https://github.com/karanveerthakur1122/wispervaultOpen',
    livePreview: 'https://wispervault.lovable.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'E2E Encryption']
  },
  {
    id: 2,
    title: 'KeepSplitwise',
    category: 'fullstack',
    description: 'Real-time collaborative note-taking and bill-splitting app with glassmorphism UI, offline PWA support, and automatic settlement plans.',
    link: 'https://github.com/karanveerthakur1122/splitwisenoteOpen',
    livePreview: 'http://splitwisenote.lovable.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 3,
    title: 'GharKhoj Nepal',
    category: 'fullstack',
    description: 'Verified rental property booking platform for Nepal — connecting landlords and tenants with real-time chat, map view, and admin verification.',
    link: 'https://github.com/karanveerthakur1122/gharma-your-rental-home',
    livePreview: 'https://gharkhoji.lovable.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Leaflet']
  },
  {
    id: 7,
    title: 'Ear-Based Person Identification',
    category: 'ml',
    description: 'Transfer learning models for ear biometric identification using DenseNet121 (100%), ResNet50 (99.39%), VGG19, MobileNetV2, and EfficientNetB0 with comparative evaluation. Published in IEEE Xplore.',
    link: 'https://github.com/karanveerthakur1122',
    livePreview: null,
    technologies: ['Python', 'Machine Learning', 'CNNs', 'Transfer Learning', 'DenseNet121', 'ResNet50']
  },
  {
    id: 4,
    title: 'Weather Application',
    category: 'react',
    description: 'A modern and visually appealing weather app that retrieves live weather data for locations across the globe.',
    link: 'https://github.com/karanveerthakur1122/live-weather',
    livePreview: 'https://weather-dashboard-karan.netlify.app/',
    technologies: ['React', 'JavaScript', 'API Integration', 'CSS']
  },
  {
    id: 5,
    title: 'Crypto Price Tracker',
    category: 'react',
    description: 'A React.js app that retrieves and displays cryptocurrency prices from the CoinStat API with search functionality.',
    link: 'https://github.com/karanveerthakur1122/LiveCryptoPrice',
    livePreview: 'https://live-cryptoprices.netlify.app/',
    technologies: ['React', 'API Integration', 'State Management', 'CSS Grid']
  },
  {
    id: 6,
    title: 'Movie Review Finder',
    category: 'react',
    description: 'A dynamic movie review app built with React that uses an external API for real-time movie details.',
    link: 'https://github.com/karanveerthakur1122/movie-finder',
    livePreview: 'https://mo-vie-fin-der.netlify.app/',
    technologies: ['React', 'API Integration', 'React Hooks', 'Responsive Design']
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [openPreview, setOpenPreview] = useState(null);

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  const togglePreview = useCallback((id) => {
    setOpenPreview((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="pf-page">
      {/* ── Hero Header ── */}
      <section className="pf-hero">
        <div className="pf-hero-orb pf-orb-1" />
        <div className="pf-hero-orb pf-orb-2" />

        <div className="pf-hero-panel">
          <div className="pf-panel-shine" />
          <div className="pf-panel-edge" />

          <div className="pf-hero-content">
            <span className="pf-tag">PORTFOLIO</span>
            <h1 className="pf-title">My Projects</h1>
            <p className="pf-subtitle">
              Check out some of my recent projects and works
            </p>

            <div className="pf-filters">
              {categories.map((c) => (
                <button
                  key={c.key}
                  className={`pf-filter-btn ${filter === c.key ? 'active' : ''}`}
                  onClick={() => setFilter(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="pf-grid-section">
        <div className="pf-grid">
          {filtered.map((project) => (
            <div className="pf-card-wrap" key={project.id}>
              <div className="pf-card">
                <div className="pf-card-banner">
                  <ProjectBanner
                    title={project.title}
                    category={project.category}
                    technologies={project.technologies}
                  />
                  {project.livePreview && (
                    <span className="pf-live-badge">Live</span>
                  )}
                </div>

                <div className="pf-card-body">
                  <div className="pf-card-cat">{project.category}</div>
                  <h3 className="pf-card-title">{project.title}</h3>
                  <p className="pf-card-desc">{project.description}</p>

                  <div className="pf-card-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="pf-card-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="pf-card-actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-action-btn pf-github-btn"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.livePreview && (
                      <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-action-btn pf-live-btn"
                      >
                        <FaGlobe /> Live Site
                      </a>
                    )}
                  </div>

                  {project.livePreview && (
                    <button
                      className={`pf-preview-toggle ${openPreview === project.id ? 'open' : ''}`}
                      onClick={() => togglePreview(project.id)}
                    >
                      {openPreview === project.id ? <FaTimes /> : <FaEye />}
                      {openPreview === project.id ? 'Hide Preview' : 'Show Preview'}
                    </button>
                  )}
                </div>
              </div>

              {/* Lazy: iframe only mounts when user clicks */}
              {openPreview === project.id && project.livePreview && (
                <div className="pf-preview-wrap">
                  <LivePreview
                    title={`${project.title} - Live Preview`}
                    url={project.livePreview}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="pf-empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
