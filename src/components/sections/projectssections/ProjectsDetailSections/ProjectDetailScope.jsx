import React from 'react';
import './ProjectsDetailSections.css';

const ProjectDetailScope = ({ scopeItems = [], backgroundImage }) => {
  return (
    <section
      className="project-detail-scope"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="project-detail-scope-container">
        <h2 className="scope-title">
          Scope of Work
          <span className="scope-title-highlight"> Breakdown</span>
        </h2>

        <div className="scope-grid">
          {scopeItems.map((item, index) => (
            <div key={index} className="scope-card">
              <h4 className="scope-card-title">{item.title}</h4>

              {Array.isArray(item.items) && item.items.length > 0 && (
                <ul className="scope-card-list">
                  {item.items.map((listItem, idx) => (
                    <li key={idx}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailScope;
