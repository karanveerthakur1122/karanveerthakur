import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import '../css/Home.css';
import ToolsGrid from '../component/ToolsGrid';
import FeaturedProjects from '../component/FeaturedProjects';
import Testimonials from '../component/Testimonials';
import pic1 from '../files/pic1.png';
import pic2 from '../files/pic2.jpg';
import pic3 from '../files/pic3.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [pic1, pic2, pic3];
  const slabRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const slab = slabRef.current;
    if (!slab) return;

    const onMove = (e) => {
      const rect = slab.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      slab.style.setProperty('--rx', `${-y * 4}deg`);
      slab.style.setProperty('--ry', `${x * 4}deg`);
      slab.style.setProperty('--gx', `${50 + x * 20}%`);
      slab.style.setProperty('--gy', `${50 + y * 20}%`);
    };

    const onLeave = () => {
      slab.style.setProperty('--rx', '0deg');
      slab.style.setProperty('--ry', '0deg');
      slab.style.setProperty('--gx', '50%');
      slab.style.setProperty('--gy', '50%');
    };

    slab.addEventListener('mousemove', onMove);
    slab.addEventListener('mouseleave', onLeave);
    return () => {
      slab.removeEventListener('mousemove', onMove);
      slab.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg-orb hero-orb-1" />
        <div className="hero-bg-orb hero-orb-2" />
        <div className="hero-bg-orb hero-orb-3" />

        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting anim-rise" style={{ '--d': '0s' }}>Hi, I'm</p>
            <h1 className="hero-name anim-rise" style={{ '--d': '0.1s' }}>Karan Veer Thakur</h1>
            <h2 className="hero-role anim-rise" style={{ '--d': '0.2s' }}>Full Stack Developer &amp; ML Researcher</h2>
            <p className="hero-desc anim-rise" style={{ '--d': '0.3s' }}>
              B.Tech CSE graduate from KIIT, building scalable
              full-stack apps and applying machine learning research.
            </p>
            <div className="hero-buttons anim-rise" style={{ '--d': '0.4s' }}>
              <Link to="/portfolio" className="glass-btn glass-btn-primary">
                View My Work <FaArrowRight />
              </Link>
              <Link to="/contact" className="glass-btn glass-btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-frame-area anim-frame">
            {/* Glass slab base */}
            <div className="glass-slab" ref={slabRef}>
              <div className="slab-shine" />
              <div className="slab-edge-top" />
              <div className="slab-edge-bottom" />

              {/* Photo frame sitting on the slab */}
              <div className="frame-mount">
                <div className="frame-border">
                  <div className="frame-inner">
                    {images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Karan ${i + 1}`}
                        className={`frame-photo ${i === currentImage ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                  <div className="frame-glare" />
                </div>

                <div className="frame-dots">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i === currentImage ? 'active' : ''}`}
                      onClick={() => setCurrentImage(i)}
                    />
                  ))}
                </div>
              </div>

              {/* Slab reflection */}
              <div className="slab-reflection" />
            </div>
          </div>
        </div>
      </section>

      {/* ── About Me ── */}
      <section className="about-section">
        <div className="about-bg-orb about-orb-1" />
        <div className="about-bg-orb about-orb-2" />

        <div className="about-glass-panel">
          <div className="about-panel-shine" />
          <div className="about-panel-edge" />

          <div className="about-layout">
            {/* Glass-framed photo */}
            <div className="about-photo-side">
              <div className="about-photo-glass">
                <div className="about-photo-glare" />
                <img src={pic2} alt="Karan Veer Thakur" />
              </div>
              <div className="about-photo-label">
                <span className="label-dot" />
                Karan Veer Thakur
              </div>
            </div>

            {/* Content */}
            <div className="about-content-side">
              <span className="about-tag">ABOUT ME</span>
              <h2 className="about-heading">B.Tech CSE Graduate | KIIT University</h2>
              <p className="about-text">
                Computer Science graduate with strong fundamentals in OOP,
                data structures, and machine learning. Experienced in full-stack
                development and applied ML research, with an IEEE-published paper.
              </p>

              <div className="about-details">
                <div className="detail-row">
                  <span className="detail-key">Name</span>
                  <span className="detail-val">Karan Veer Thakur</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">Email</span>
                  <span className="detail-val">karanveerthakur1122@gmail.com</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">Location</span>
                  <span className="detail-val">Bhubaneswar, Odisha</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">Education</span>
                  <span className="detail-val">B.Tech CSE, KIIT University</span>
                </div>
              </div>

              <div className="about-pills">
                {['Java', 'React', 'Python', 'Machine Learning', 'SQL', 'Spring Boot', 'DSA'].map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>

              <div className="about-actions">
                <Link to="/about" className="glass-btn glass-btn-primary">
                  More About Me <FaArrowRight />
                </Link>
                <a href="/files/resume.pdf" download className="glass-btn glass-btn-secondary">
                  <FaDownload /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToolsGrid />
      <FeaturedProjects />
      <Testimonials />
    </div>
  );
};

export default Home;
