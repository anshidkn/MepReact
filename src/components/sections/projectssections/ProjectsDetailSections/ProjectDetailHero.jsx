import React from 'react';
import { Link } from 'react-router-dom';
import "../ProjectsHeroSection/ProjectsHeroSection.css";

const ProjectDetailHero = ({ backgroundImage }) => {
  return (
    <section
      className="projects-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="projects-hero-overlay" />
      <div className="projects-hero-content">
      <h1 className="projects-hero-title">OUR PROJECTS</h1>
      </div>
    </section>
  );
};
export default ProjectDetailHero;