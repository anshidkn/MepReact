import React from 'react';
import './SafetyQualitySection.css';

const SafetyQualitySection = ({ image }) => {
  return (
    <section className="safety-quality-section">
      <div className="safety-quality-container">
        <div className="safety-quality-image-wrapper">
          <img src={image} alt="Safety and Quality" className="safety-quality-image" />
        </div>
        <div className="safety-quality-content">
          <h2 className="safety-quality-title">
            Safety & Quality<br /><span className="text-red">Commitment</span>
          </h2>
          <p className="safety-quality-description">
            Safety and quality are embedded in every stage of our operations. Al Masaya Electro Mechanical Company strictly follows UAE regulations, authority requirements, and international engineering standards. Our team undergoes regular training to ensure safe practices, proper documentation, and high-quality workmanship on every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetyQualitySection;