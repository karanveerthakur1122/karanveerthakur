import React, { useMemo } from 'react';
import '../css/ProjectBanner.css';

const ProjectBanner = React.memo(({ title, category, technologies }) => {
  const { pattern, displayTechs } = useMemo(() => {
    const hash = title.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);

    const primaryHue = Math.abs(hash % 360);
    const secondaryHue = (primaryHue + 180) % 360;

    const techs = technologies || [];
    const picked = techs.length <= 2 ? techs : techs.slice(0, 2);

    return {
      pattern: {
        primaryColor: `hsl(${primaryHue}, 70%, 65%)`,
        secondaryColor: `hsl(${secondaryHue}, 70%, 65%)`,
        pattern: hash % 5
      },
      displayTechs: picked
    };
  }, [title, technologies]);
  
  // Get appropriate icon for category
  const getCategoryIcon = (cat) => {
    switch(cat.toLowerCase()) {
      case 'react': return 'fab fa-react';
      case 'java': return 'fab fa-java';
      case 'web': return 'fas fa-globe';
      case 'dsa': return 'fas fa-code';
      default: return 'fas fa-laptop-code';
    }
  };

  return (
    <div 
      className={`project-banner pattern-${pattern.pattern}`}
      style={{
        '--primary-color': pattern.primaryColor,
        '--secondary-color': pattern.secondaryColor
      }}
    >
      <div className="banner-content">
        <div className="banner-title-area">
          <h3 className="banner-title">{title}</h3>
          <div className="banner-category">
            <i className={getCategoryIcon(category)}></i>
            <span>{category}</span>
          </div>
        </div>
        
        <div className="banner-floating-techs">
          {displayTechs.map((tech, index) => (
            <div 
              key={index}
              className={`floating-tech ft-${index + 1}`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectBanner;
