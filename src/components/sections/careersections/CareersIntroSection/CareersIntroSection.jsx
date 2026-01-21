import React from 'react';
import './CareersIntroSection.css';

const CareersIntroSection = ({ 
  label = "Careers at AMEMCO",
  title = "Join a professional MEP engineering team shaping",
  titleHighlight = "the future of construction",
  titleEnd = "in the UAE.",
  description = "Al Masaya Electro Mechanical Company welcomes skilled engineers, technicians, and professionals who are passionate about delivering high-quality Mechanical, Electrical, Plumbing, Fire Fighting, and Low-Current engineering solutions. If you are looking to grow your career in a professional and supportive environment, we invite you to submit your resume."
}) => {
  return (
    <section className="careers-intro-section">
      <div className="careers-intro-container">
        <span className="careers-intro-label">{label}</span>
        <h2 className="careers-intro-title">
          {title}<br />
          <span className="text-red">{titleHighlight}</span> {titleEnd}
        </h2>
        <p className="careers-intro-description">{description}</p>
      </div>
    </section>
  );
};

export default CareersIntroSection;