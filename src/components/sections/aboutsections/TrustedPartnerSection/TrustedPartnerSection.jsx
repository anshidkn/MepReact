import React from 'react';
import './TrustedPartnerSection.css';

const TrustedPartnerSection = ({ image, backgroundImage }) => {
  return (
    <section className="trusted-partner-section">
      <div className="trusted-partner-container">
        <div className="trusted-partner-content">
          <span className="trusted-partner-label">Who We Are</span>
          <h2 className="trusted-partner-title">
           <span className="text-red">Your Trusted MEP</span><br />Engineering Partner
          </h2>
          <p className="trusted-partner-description">
            Al Masaya Electro Mechanical Company is a UAE-based MEP contracting company specializing in end-to-end MEP services. We collaborate closely with developers, consultants, contractors, and building owners to deliver reliable MEP systems that ensure long-term success and accuracy standards.
          </p>
          <p className="trusted-partner-description">
            Our team of skilled engineers, supervisors, and technicians ensures your project is executed with precision — from design, procurement and delivery to installation, testing, and final handover.
          </p>
        </div>
        <div className="trusted-partner-image-wrapper">
          <img src={image} alt="MEP Engineer" className="trusted-partner-image" />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerSection;