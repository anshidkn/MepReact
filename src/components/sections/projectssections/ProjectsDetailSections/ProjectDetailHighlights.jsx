import React from 'react';
import './ProjectsDetailSections.css';

const CheckIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="highlight-check-icon"
  >
    <path 
      d="M5 13L9 17L19 7" 
      stroke="#10B981" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectDetailHighlights = ({ highlights = [], mainImage }) => {
  return (
    <section className="project-detail-highlights">
      <div className="project-detail-highlights-container">
        <div className="highlights-content-grid">
          {/* Left Column - Title and List */}
          <div className="highlights-list-col">
            <h2 className="highlights-title">
              Key <span className="highlights-title-red">Highlights</span>
            </h2>

            <ul className="highlights-list">
              {highlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <CheckIcon />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="highlights-image-col">
            <div className="highlights-image-wrapper">
              <img src={mainImage} alt="Project Highlight" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailHighlights;