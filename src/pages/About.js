import React from 'react';
import '../css/About.css';
import profilePic from '../files/pic2.jpg';
import Timeline from '../component/Timeline';
import {
  FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt,
  FaMapMarkerAlt, FaDownload, FaGraduationCap,
  FaBook, FaExternalLinkAlt, FaTrophy, FaCertificate,
  FaCode
} from 'react-icons/fa';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'HTML / CSS', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Machine Learning', level: 75 },
  { name: 'SQL', level: 80 },
  { name: 'DSA', level: 85 },
  { name: 'Spring Boot', level: 75 },
  { name: 'C', level: 70 },
];

const contactItems = [
  { icon: <FaEnvelope />, text: 'karanveerthakur1122@gmail.com', href: 'mailto:karanveerthakur1122@gmail.com' },
  { icon: <FaPhoneAlt />, text: '+91 8093687983', href: 'tel:+918093687983' },
  { icon: <FaMapMarkerAlt />, text: 'Bhubaneswar, Odisha' },
  { icon: <FaLinkedin />, text: 'linkedin.com/in/karanveerthakur1122', href: 'https://linkedin.com/in/karanveerthakur1122', external: true },
  { icon: <FaGithub />, text: 'github.com/karanveerthakur1122', href: 'https://github.com/karanveerthakur1122', external: true },
];

const codingProfiles = [
  { platform: 'CodeChef', problems: '400+', href: 'https://www.codechef.com/users/karanveerthakur' },
  { platform: 'LeetCode', problems: '100+', href: 'https://leetcode.com/karanveerthakur1122' },
  { platform: 'GeeksforGeeks', problems: '300+', href: 'https://www.geeksforgeeks.org/user/karanveerthakur1122' },
];

const certifications = [
  'Eye Spy Squid Workshop (Python & Gaming) – MLSA KIIT',
  'Hacknovate 6.0 Hackathon Participant – ABES Institute of Technology',
];

const About = () => {
  return (
    <div className="about-page">
      {/* ── Hero ── */}
      <section className="abt-hero">
        <div className="abt-hero-orb abt-orb-1" />
        <div className="abt-hero-orb abt-orb-2" />

        <div className="abt-hero-panel">
          <div className="abt-panel-shine" />
          <div className="abt-panel-edge" />

          <div className="abt-hero-layout">
            {/* Photo side */}
            <div className="abt-photo-col">
              <div className="abt-photo-glass">
                <div className="abt-photo-glare" />
                <img src={profilePic} alt="Karan Veer Thakur" />
              </div>
              <a href="/files/resume.pdf" download className="glass-btn glass-btn-primary abt-cv-btn">
                <FaDownload /> Download CV
              </a>
            </div>

            {/* Info side */}
            <div className="abt-info-col">
              <span className="abt-tag">ABOUT ME</span>
              <h1 className="abt-name">Karan Veer Thakur</h1>
              <h2 className="abt-role">B.Tech CSE Graduate | KIIT University</h2>
              <p className="abt-bio">
                Computer Science and Engineering graduate from KIIT University with
                strong fundamentals in object-oriented programming, data structures,
                and machine learning. Experienced in full-stack development and
                applied ML research, with an IEEE-published paper on CNN-based
                biometric identification. Passionate about building scalable,
                user-centric systems that bridge innovation and usability.
              </p>

              <div className="abt-contact-grid">
                {contactItems.map((item, i) => (
                  <div className="abt-contact-chip" key={i}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="abt-contact-link"
                      >
                        <span className="abt-chip-icon">{item.icon}</span>
                        <span className="abt-chip-text">{item.text}</span>
                      </a>
                    ) : (
                      <div className="abt-contact-link">
                        <span className="abt-chip-icon">{item.icon}</span>
                        <span className="abt-chip-text">{item.text}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="abt-timeline-wrap">
        <Timeline />
      </section>

      {/* ── Skills ── */}
      <section className="abt-skills">
        <div className="abt-skills-orb abt-sorb-1" />
        <div className="abt-skills-orb abt-sorb-2" />

        <div className="abt-skills-panel">
          <div className="abt-panel-shine" />
          <div className="abt-panel-edge" />

          <div className="abt-skills-header">
            <span className="abt-tag">EXPERTISE</span>
            <h2 className="abt-skills-heading">Technical Skills</h2>
            <p className="abt-skills-sub">Proficiency levels across my core tech stack</p>
          </div>

          <div className="abt-skills-grid">
            {skills.map((s, i) => (
              <div className="abt-skill-row" key={i}>
                <div className="abt-skill-top">
                  <span className="abt-skill-name">{s.name}</span>
                  <span className="abt-skill-pct">{s.level}%</span>
                </div>
                <div className="abt-skill-track">
                  <div
                    className="abt-skill-fill"
                    style={{ '--w': `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="abt-edu">
        <div className="abt-edu-panel">
          <div className="abt-panel-shine" />
          <div className="abt-panel-edge" />

          <div className="abt-edu-header">
            <span className="abt-tag">EDUCATION</span>
            <h2 className="abt-edu-heading">Academic Background</h2>
          </div>

          <div className="abt-edu-card">
            <div className="abt-edu-icon"><FaGraduationCap /></div>
            <div className="abt-edu-info">
              <h3 className="abt-edu-degree">B.Tech in Computer Science &amp; Engineering</h3>
              <p className="abt-edu-school">Kalinga Institute of Industrial Technology (KIIT), Odisha, India</p>
              <div className="abt-edu-meta">
                <span className="abt-edu-year">2022 – 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Publication ── */}
      <section className="abt-research">
        <div className="abt-research-orb abt-rorb-1" />

        <div className="abt-research-panel">
          <div className="abt-panel-shine" />
          <div className="abt-panel-edge" />

          <div className="abt-research-header">
            <span className="abt-tag">PUBLICATION</span>
            <h2 className="abt-research-heading">Research Work</h2>
          </div>

          <div className="abt-pub-card">
            <div className="abt-pub-icon"><FaBook /></div>
            <div className="abt-pub-info">
              <h3 className="abt-pub-title">
                Performance Comparison of Pretrained CNN Architectures for Ear
                Biometric Identification Using Transfer Learning
              </h3>
              <p className="abt-pub-venue">
                IEEE IC-CGU 2025, Bhubaneswar, India — Published in IEEE Xplore
              </p>
              <a
                href="https://doi.org/10.1109/IC-CGU67042.2025.11338087"
                target="_blank"
                rel="noopener noreferrer"
                className="abt-pub-link"
              >
                DOI: 10.1109/IC-CGU67042.2025.11338087 <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coding Profiles ── */}
      <section className="abt-profiles">
        <div className="abt-profiles-panel">
          <div className="abt-panel-shine" />
          <div className="abt-panel-edge" />

          <div className="abt-profiles-header">
            <span className="abt-tag">COMPETITIVE CODING</span>
            <h2 className="abt-profiles-heading">Coding Profiles</h2>
            <p className="abt-profiles-sub">800+ problems solved across platforms</p>
          </div>

          <div className="abt-profiles-grid">
            {codingProfiles.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="abt-profile-card"
              >
                <FaCode className="abt-profile-icon" />
                <h3 className="abt-profile-name">{p.platform}</h3>
                <span className="abt-profile-count">{p.problems} problems</span>
                <FaTrophy className="abt-profile-trophy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="abt-certs">
        <div className="abt-certs-panel">
          <div className="abt-panel-shine" />
          <div className="abt-panel-edge" />

          <div className="abt-certs-header">
            <span className="abt-tag">CERTIFICATIONS</span>
            <h2 className="abt-certs-heading">Achievements</h2>
          </div>

          <div className="abt-certs-list">
            {certifications.map((cert, i) => (
              <div className="abt-cert-item" key={i}>
                <FaCertificate className="abt-cert-icon" />
                <span className="abt-cert-text">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
