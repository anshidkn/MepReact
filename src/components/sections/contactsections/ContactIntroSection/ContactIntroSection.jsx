import React from 'react';
import './ContactIntroSection.css';

const ContactIntroSection = ({ 
  label = "Contact Us",
  title = "Let's discuss your project and how we can support",
  titleHighlight = "your MEP requirements.",
  description = "Have a project in planning or execution stage? Our engineering team is ready to assist you with reliable, compliant, and cost-effective MEP solutions. Get in touch with us today."
}) => {
  return (
    <section className="contact-intro-section">
      <div className="contact-intro-container">
        <span className="contact-intro-label">{label}</span>
        <h2 className="contact-intro-title">
          {title}<br />
          <span className="text-red">{titleHighlight}</span>
        </h2>
        <p className="contact-intro-description">{description}</p>
      </div>
    </section>
  );
};

export default ContactIntroSection;