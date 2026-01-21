import React from 'react';
import './ProjectsIntroSection.css';

const ProjectsIntroSection = ({ 
  label = "Projects",
  title,
  titleHighlight,
  description,
  image1,
  image2
}) => {
  return (
    <section className="projects-intro-section">
      <div className="projects-intro-container">
        <span className="projects-intro-label">{label}</span>
        <h2 className="projects-intro-title">
          {title}<br />
          <span className="text-red">{titleHighlight} </span><span>across UAE.</span>
        </h2>
        <p className="projects-intro-description">
          {description}
        </p>
        <div className="projects-intro-images">
          <div className="projects-intro-image projects-intro-image">
            <img src={image1} alt="Project showcase 1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsIntroSection;