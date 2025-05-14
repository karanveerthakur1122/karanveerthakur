import React, { useState } from 'react';
import '../css/Portfolio.css';
import LivePreview from '../component/LivePreview';
import ProjectBanner from '../component/ProjectBanner';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');  // Portfolio projects data
  const projects = [    {
      id: 1,
      title: 'Weather Application',
      category: 'react',
      image: 'https://play.google.com/store/apps/details?id=com.zte.weather',
      description: 'A modern and visually appealing weather app that retrieves live weather data for locations across the globe.',
      link: 'https://github.com/karanveerthakur1122/live-weather',
      livePreview: 'https://weather-dashboard-karan.netlify.app/',
      technologies: ['React', 'JavaScript', 'API Integration', 'CSS']
    },    {
      id: 2,
      title: 'Crypto Price Tracker',
      category: 'react',
      image: 'https://medevel.com/content/images/2021/10/screely-1633250646964.png',
      description: 'A React.js app that retrieves and displays cryptocurrency prices from the CoinStat API with search functionality.',
      link: 'https://github.com/karanveerthakur1122/LiveCryptoPrice',
      livePreview: 'https://live-cryptoprices.netlify.app/',
      technologies: ['React', 'API Integration', 'State Management', 'CSS Grid']
    },    {
      id: 3,
      title: 'Movie Review Finder',
      category: 'react',
      image: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d41c59e6e205c4a3f8dad5d2bf5d18bb~c5_100x100.jpeg?x-expires=1652601600&x-signature=uQkBJcHx9UOYfA%2FGm2pKC5yZREY%3D',
      description: 'A dynamic movie review app built with React that uses an external API for real-time movie details.',
      link: 'https://github.com/karanveerthakur1122/movie-finder',
      livePreview: 'https://mo-vie-fin-der.netlify.app/',
      technologies: ['React', 'API Integration', 'React Hooks', 'Responsive Design']
    },
    {
      id: 4,
      title: 'Student Management System',
      category: 'java',
      image: 'https://www.powerschool.com/wp-content/uploads/2023/06/1200x900-Choosing-a-Student-Management-System-1200x675.png',
      description: 'A Java-based application for managing student records, courses, and grades with a user-friendly interface.',
      link: 'https://github.com/karanveerthakur1122/student-management',
      technologies: ['Java', 'Object-Oriented Design', 'SQL Database', 'JDBC']
    },    {
      id: 5,
      title: 'Data Structures Implementation',
      category: 'dsa',
      image: 'https://repository-images.githubusercontent.com/322271904/92f4cc80-4243-11eb-9e97-a71b32a4f82e',
      description: 'A comprehensive collection of data structures implementations including linked lists, trees, and graphs.',
      link: 'https://github.com/karanveerthakur1122/dsa-implementations',
      technologies: ['Java', 'Data Structures', 'Algorithms', 'Problem Solving']
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      category: 'web',
      image: 'https://scontent.fbom36-1.fna.fbcdn.net/v/t39.30808-6/391257267_903142251528111_2178277153992957325_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jY_tqvF87S0AX8qZbZH&_nc_ht=scontent.fbom36-1.fna&oh=00_AfA_RIAwJgvd5SJJLQEfZKv-fPIoUXxNIGv3_0MgCKtF-A&oe=66050158',
      description: 'A responsive personal portfolio website built with React and featuring dark/light theme toggle.',
      link: 'https://github.com/karanveerthakur1122/portfolio',
      technologies: ['React', 'CSS', 'Responsive Design', 'JavaScript']
    }
  ];

  // Filter projects based on category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (    <div className="portfolio-container">
      <div className="portfolio-header" data-aos="fade-down" data-aos-duration="800">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-description">
          Check out some of my recent projects and works
        </p>
        
        <div className="portfolio-filter" data-aos="fade-up" data-aos-delay="200">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React
          </button>
          <button 
            className={`filter-btn ${filter === 'java' ? 'active' : ''}`}
            onClick={() => setFilter('java')}
          >
            Java
          </button>
          <button 
            className={`filter-btn ${filter === 'dsa' ? 'active' : ''}`}
            onClick={() => setFilter('dsa')}
          >
            DSA
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
        </div>      </div>        <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="project-container" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>            <div className={`portfolio-item ${project.livePreview ? 'has-preview' : ''}`}>
              <div className="portfolio-image">
                <ProjectBanner 
                  title={project.title}
                  category={project.category}
                  technologies={project.technologies}
                />
                {project.livePreview && <div className="live-badge">Live Demo</div>}
              </div>
              <div className="portfolio-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View GitHub
                  </a>
                  {project.livePreview && (
                    <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                      <i className="fas fa-globe"></i> Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {project.livePreview && (
              <div className="project-live-preview">
                <LivePreview title={`${project.title} - Live Preview`} url={project.livePreview} />
              </div>
            )}          </div>
        ))}
      </div>
    </div>  );
};

export default Portfolio;