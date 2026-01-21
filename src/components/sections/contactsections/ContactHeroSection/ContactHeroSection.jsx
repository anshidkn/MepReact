import React from 'react';
import './ContactHeroSection.css';

const ContactHeroSection = ({ backgroundImage, title }) => {
  return (
    <section 
      className="contact-hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="contact-hero-overlay"></div>
      <div className="contact-hero-content">
        <h1 className="contact-hero-title">{title}</h1>
      </div>
    </section>
  );
};

export default ContactHeroSection;