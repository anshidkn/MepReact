import React from 'react';
import './AboutIntroSection.css';

const AboutIntroSection = ({ image }) => {
  return (
    <section className="about-intro-section">
      <div className="about-intro-container">
        <div className="about-intro-header">
          <span className="about-intro-label">About Al Masaya</span>
          <h2 className="about-intro-title">
            Engineering <span className="text-red">reliability, safety, and performance</span> for the UAE's growing infrastructure.
          </h2>
          <p className="about-intro-description">
            Al Masaya Electro Mechanical Company is a professional MEP contracting company delivering end-to-end Mechanical, Electrical, Plumbing, Fire Fighting, and Low-Current engineering solutions across the UAE.
          </p>
        </div>

        <div className="about-intro-images">
          <div className="about-intro-image-wrapper">
            <img src={image} alt="MEP Engineers" className="about-intro-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;