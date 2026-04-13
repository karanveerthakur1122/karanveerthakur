import React from 'react';
import '../css/Timeline.css';

const Timeline = () => {
  const timelineItems = [
    {
      year: '2025',
      title: 'AI & Machine Learning',
      organization: 'Self-Learning & University',
      description: 'Exploring artificial intelligence and machine learning. Completed project on Ear-based Biometric using recent CNN models.'
    },
    {
      year: '2024',
      title: 'Full Stack Web Development',
      organization: 'Self-Learning & University',
      description: 'Mastered full stack development with modern technologies. Built responsive and interactive web applications with modern frameworks.'
    },
    {
      year: '2023',
      title: 'Data Structures & Algorithms',
      organization: 'GeeksforGeeks, LeetCode',
      description: 'Strengthened DSA skills by solving 300+ problems on competitive platforms. Built a strong foundation in algorithm design and analysis.'
    },
    {
      year: '2022',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'Kalinga Institute of Industrial Technology',
      description: 'Currently pursuing Computer Science & Engineering with focus on advanced programming concepts and practical applications. Current GPA: 8.74/10.0'
    }
  ];

  return (
    <div className="tl-section">
      <div className="tl-bg-orb tl-orb-1" />

      <div className="tl-glass-panel">
        <div className="abt-panel-shine" />
        <div className="abt-panel-edge" />

        <div className="tl-header">
          <span className="abt-tag">JOURNEY</span>
          <h2 className="tl-heading">Education & Experience</h2>
        </div>

        <div className="tl-track">
          {timelineItems.map((item, index) => (
            <div className="tl-item" key={index}>
              <div className="tl-marker">
                <div className="tl-dot" />
              </div>

              <div className="tl-card">
                <span className="tl-year">{item.year}</span>
                <h3 className="tl-card-title">{item.title}</h3>
                <h4 className="tl-card-org">{item.organization}</h4>
                <p className="tl-card-desc">{item.description}</p>
                <div className="tl-card-glare" />
              </div>
            </div>
          ))}

          <div className="tl-line" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
