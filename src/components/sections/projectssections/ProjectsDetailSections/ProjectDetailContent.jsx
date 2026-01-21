import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsDetailSections.css';

const ProjectDetailContent = ({ 
  title,
  description,
  detailedDescription,
  mainImage,
}) => {
  return (
    <section className="project-detail-content">
      <div className="project-detail-content-container">
        
        {/* Breadcrumb */}
        <nav className="project-detail-breadcrumb">
          <Link to="/projects">Projects</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">{title}</span>
        </nav>

        {/* Centered Project Title */}
        <h1 className="project-detail-main-title">{title}</h1>

        {/* Main Content Grid */}
        <div className="project-detail-main-grid">
          {/* Image Column */}
          <div className="project-detail-image-col">
            <div className="project-detail-image-wrapper">
              <img src={mainImage} alt={title} />
            </div>
          </div>

          {/* Info Column */}
          <div className="project-detail-info-col">
            <h2 className="project-detail-subtitle">
              <span className="subtitle-highlight">Complete MEP Engineering Solutions </span>
              for a High-End Residential Development
            </h2>

            <p className="project-detail-description">{description}</p>
            <p className="project-detail-description">{detailedDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailContent;