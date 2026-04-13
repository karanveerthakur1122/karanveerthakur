import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaGlobe } from 'react-icons/fa';
import ProjectBanner from './ProjectBanner';
import '../css/FeaturedProjects.css';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'WisperVault Phantom',
      description: 'End-to-end encrypted ephemeral messaging. Anonymous, secure, and temporary — messages self-destruct after being read.',
      category: 'Full Stack',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      link: 'https://github.com/karanveerthakur1122/wispervaultOpen',
      livePreview: 'https://wispervault.lovable.app/'
    },
    {
      id: 2,
      title: 'KeepSplitwise',
      description: 'Real-time collaborative note-taking and bill-splitting app with glassmorphism UI, offline PWA support, and automatic settlements.',
      category: 'Full Stack',
      technologies: ['React', 'TypeScript', 'Supabase', 'Framer Motion'],
      link: 'https://github.com/karanveerthakur1122/splitwisenoteOpen',
      livePreview: 'http://splitwisenote.lovable.app/'
    },
    {
      id: 3,
      title: 'GharKhoj Nepal',
      description: 'Verified rental property booking platform for Nepal — real-time chat, interactive map view, and admin verification dashboard.',
      category: 'Full Stack',
      technologies: ['React', 'TypeScript', 'Supabase', 'Leaflet'],
      link: 'https://github.com/karanveerthakur1122/gharma-your-rental-home',
      livePreview: 'https://gharkhoji.lovable.app/'
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-bg-orb projects-orb-1" />
      <div className="projects-bg-orb projects-orb-2" />

      <div className="projects-glass-panel">
        <div className="projects-panel-shine" />
        <div className="projects-panel-edge" />

        <div className="projects-header">
          <span className="projects-tag">PORTFOLIO</span>
          <h2 className="projects-heading">Featured Projects</h2>
          <p className="projects-subtitle">
            Here are some of my recent projects showcasing my skills and expertise.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-banner">
                <ProjectBanner
                  title={project.title}
                  category={project.category}
                  technologies={project.technologies}
                />
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
                <div className="card-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="card-tag">{tech}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-action-btn card-github-btn">
                    <FaGithub /> Open Source
                  </a>
                  {project.livePreview && (
                    <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="card-action-btn card-live-btn">
                      <FaGlobe /> Live
                    </a>
                  )}
                </div>
              </div>

              <div className="card-glare" />
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/portfolio" className="glass-btn glass-btn-primary">
            View All Projects <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
