import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsFeaturedSection.css';

// Helper function to generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[–—]/g, '-') // Replace em-dash and en-dash
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};

const ProjectsFeaturedSection = ({ 
  title = "Featured",
  titleHighlight = "Projects",
  projects = []
}) => {
  const navigate = useNavigate();

  const handleViewDetails = (project) => {
    const slug = generateSlug(project.title);
    navigate(`/projects/${slug}`);
  };

  return (
    <section className="projects-featured-section">
      <div className="projects-featured-container">
        <h2 className="projects-featured-title">
          {title} <span className="text-red">{titleHighlight}</span>
        </h2>
        <div className="projects-featured-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
                <div className="project-image-tag">
                  {project.tag}
                </div>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <button 
                  className="project-card-btn"
                  onClick={() => handleViewDetails(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeaturedSection;