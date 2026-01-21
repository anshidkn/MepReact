import React from 'react';
import './ProjectsExperienceSection.css';

const ProjectsExperienceSection = ({ 
  titleRed = "Proven Experience",
  titleBlack = "You Can Rely On",
  description,
  image,
  backgroundImage
}) => {
  return (
    <section 
      className="projects-experience-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="projects-experience-container">
        <div className="projects-experience-content">
          <h2 className="projects-experience-title">
            <span className="text-red">{titleRed}</span><br />
            {titleBlack}
          </h2>
          <p className="projects-experience-description">
            {description}
          </p>
        </div>
        <div className="projects-experience-image">
          <img src={image} alt="Experienced professional at work" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsExperienceSection;