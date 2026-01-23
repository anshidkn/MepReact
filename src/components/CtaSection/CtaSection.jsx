import React from 'react';
import { Link } from 'react-router-dom';
import ctaBg from '../../assets/cta_bg.png';
import engineerImg from '../../assets/engineer.png';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section 
      className="cta-section"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="cta-container">
        <div className="cta-card">
          <div className="cta-image-wrapper">
            <img
              src={engineerImg}
              alt="MEP Engineer"
              className="cta-image"
            />
          </div>

          <div className="cta-text">
            <h2 className="cta-title">
              Ready to Start Your Project With a Trusted MEP Partner?
            </h2>
            <p className="cta-description">
              Our expert team is here to plan, design, and execute your MEP requirements with precision and care.
            </p>

            <div className="cta-buttons">
              {/* <Link to="/quote" className="cta-btn cta-btn-primary">
                Request a Quote
              </Link> */}
              <Link to="/contact" className="cta-btn cta-btn-secondary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;