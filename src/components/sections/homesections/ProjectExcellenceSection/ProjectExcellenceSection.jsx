import React from 'react';
import './ProjectExcellenceSection.css';

// Arrow Icon Component
const ArrowIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ProjectExcellenceSection = ({
  projectExcellenceImage1,
  projectExcellenceImage2,
  projectExcellenceImage3
}) => {
  const projects = [
    {
      image: projectExcellenceImage1,
      title: "Luxury Villa – Dubai",
      description: "Full MEP setup including HVAC, electrical distribution, plumbing, drainage & firefighting.",
      link: "/projects/luxury-villa-dubai"
    },
    {
      image: projectExcellenceImage2,
      title: "Corporate Office – Sharjah",
      description: "VRF installation,BMS integration,structured cabling & emergency systems.",
      link: "/projects/corporate-tower-abudhabi"
    },
    {
      image: projectExcellenceImage3,
      title: "Warehouse Complex – Jabel Ali",
      description: "Electrical containment,fire pump installation,sprinklers,ventilation and low-current systems.",
      link: "/projects/residential-building-abudhabi"
    }
  ];

  return (
    <section className="project-excellence-section">
      {/* Section Header */}
      <div className="project-excellence-header">
        <h2>
          Our Project <span>Excellence</span>
        </h2>
        <p>
          Our track record speaks for itself. Every project is delivered with 
          precision, safety, and complete authority compliance.
        </p>
      </div>

      {/* Featured Projects Watermark - Outside the slides */}
      <div className="featured-projects-watermark">
        Featured Projects
      </div>

      {/* Projects Container */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-slide" key={index}>
            {/* Background Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="project-slide-image"
            />
            
            {/* Dark Overlay */}
            <div className="project-slide-overlay"></div>
            
            {/* View Details Button - appears on hover */}
            <a href={project.link} className="project-view-btn">
              View Details <ArrowIcon />
            </a>
            
            {/* Project Info - appears on hover */}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectExcellenceSection;