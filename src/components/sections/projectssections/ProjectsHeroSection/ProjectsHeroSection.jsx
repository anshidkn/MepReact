import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectsHeroSection.css";

const ProjectsHeroSection = ({ backgroundImage, activeTab, showTabs = true }) => {
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

export default ProjectsHeroSection;