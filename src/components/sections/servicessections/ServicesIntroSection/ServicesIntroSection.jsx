import React from 'react';
import './ServicesIntroSection.css';

const ServicesIntroSection = () => {
  return (
    <section className="services-intro-section">
      <div className="services-intro-container">
        <span className="services-intro-label">Our MEP Engineering Services</span>
        <h2 className="services-intro-title">
          Complete solutions engineered for<br />
          <span className="text-red">performance, safety, and compliance.</span>
        </h2>
        <p className="services-intro-description">
          Al Masaya Electro Mechanical Company delivers turnkey MEP engineering services for residential, commercial and industrial projects across the UAE. From design coordination and authority approvals to installation, testing, and maintenance — we ensure seamless execution at every stage.
        </p>
      </div>
    </section>
  );
};

export default ServicesIntroSection;