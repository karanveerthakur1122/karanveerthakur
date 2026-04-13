import React from 'react';
import '../css/ToolsGrid.css';

const ToolsGrid = () => {
  const primaryTools = [
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' }
  ];

  const secondaryTools = [
    { name: 'Spring', icon: 'devicon-spring-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
    { name: 'Linux', icon: 'devicon-linux-plain colored' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
  ];

  const mlTools = [
    { name: 'Machine Learning', icon: 'devicon-python-plain colored' },
    { name: 'LangChain', icon: 'devicon-python-plain colored' },
    { name: 'C', icon: 'devicon-c-plain colored' },
    { name: 'WordPress', icon: 'devicon-wordpress-plain colored' },
  ];

  return (
    <section className="tools-section">
      <div className="tools-bg-orb tools-orb-1" />
      <div className="tools-bg-orb tools-orb-2" />

      <div className="tools-glass-panel">
        <div className="tools-panel-shine" />
        <div className="tools-panel-edge" />

        <div className="tools-header">
          <span className="tools-tag">SOFTWARE</span>
          <h2 className="tools-heading">Tools I Use</h2>
          <p className="tools-subtitle">Technologies and frameworks I work with daily</p>
        </div>

        <div className="tools-body">
          <div className="tools-group">
            <h3 className="group-label">Primary Stack</h3>
            <div className="tools-grid">
              {primaryTools.map((tool, i) => (
                <div key={i} className="tool-tile">
                  <div className="tile-icon-wrap">
                    <i className={tool.icon} />
                  </div>
                  <span className="tile-name">{tool.name}</span>
                  <div className="tile-glare" />
                </div>
              ))}
            </div>
          </div>

          <div className="tools-divider" />

          <div className="tools-group">
            <h3 className="group-label">Secondary Stack</h3>
            <div className="tools-grid">
              {secondaryTools.map((tool, i) => (
                <div key={i} className="tool-tile">
                  <div className="tile-icon-wrap">
                    <i className={tool.icon} />
                  </div>
                  <span className="tile-name">{tool.name}</span>
                  <div className="tile-glare" />
                </div>
              ))}
            </div>
          </div>

          <div className="tools-divider" />

          <div className="tools-group">
            <h3 className="group-label">AI / ML & Others</h3>
            <div className="tools-grid">
              {mlTools.map((tool, i) => (
                <div key={i} className="tool-tile">
                  <div className="tile-icon-wrap">
                    <i className={tool.icon} />
                  </div>
                  <span className="tile-name">{tool.name}</span>
                  <div className="tile-glare" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
