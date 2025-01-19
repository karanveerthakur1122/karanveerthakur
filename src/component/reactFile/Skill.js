import React from 'react';
import '../css/Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faWordpress,
  faNpm,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

const Skill = () => {
  return (
    <div className="skill-container">
      <h2 className="skill-heading">
        <span className="gradient-text">SKILLS</span>
      </h2>
      <p className="skill-description">The skills, tools and technologies I use:</p>
      <div className="skills-icons">
        <FontAwesomeIcon icon={faHtml5} title="HTML5" className="skill-icon" />
        <FontAwesomeIcon icon={faCss3Alt} title="CSS3" className="skill-icon" />
        <FontAwesomeIcon icon={faJs} title="JavaScript" className="skill-icon" />
        <FontAwesomeIcon icon={faReact} title="React" className="skill-icon" />
        <FontAwesomeIcon icon={faCubes} title="Webpack" className="skill-icon" />
        <FontAwesomeIcon icon={faGitAlt} title="Git" className="skill-icon" />
        <FontAwesomeIcon icon={faWordpress} title="WordPress" className="skill-icon" />
        <FontAwesomeIcon icon={faNpm} title="NPM" className="skill-icon" />
        <FontAwesomeIcon icon={faSass} title="SASS" className="skill-icon" />
      </div>
    </div>
  );
};

export default Skill;
