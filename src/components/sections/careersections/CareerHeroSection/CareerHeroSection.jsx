import React from 'react';
import './CareerHeroSection.css';

const CareerHeroSection = ({ backgroundImage, title }) => {
  return (
    <section 
      className="career-hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="career-hero-overlay"></div>
      <div className="career-hero-content">
        <h1 className="career-hero-title">{title}</h1>
      </div>
    </section>
  );
};

export default CareerHeroSection;