import React from 'react';
import './AboutHeroSection.css';

const AboutHeroSection = ({ backgroundImage, title}) => {
  return (
    <section 
      className="about-hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="about-hero-overlay"></div>
      <div className="about-hero-content">
        <h1 className="about-hero-title">{title}</h1>
      </div>
    </section>
  );
};

export default AboutHeroSection;