import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDetailSection.css";

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="#0EB22C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceDetailSection = ({ service, silverShade }) => {
  const navigate = useNavigate();

  return (
    <section className="service-detail-section">
      {/* Breadcrumb & Intro - Contained */}
      <div className="service-detail-container">
        {/* Breadcrumb */}
        <div className="service-detail-breadcrumb">
          <span
            className="breadcrumb-link"
            onClick={() => navigate("/services")}
          >
            Services
          </span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">
            {service.breadcrumb}
          </span>
        </div>

        {/* Intro */}
        <div className="service-detail-intro">
          <span className="service-detail-label">{service.category}</span>
          <h2 className="service-detail-title">
            {service.title}<br />
            <span className="text-red">{service.titleHighlight}</span>
          </h2>
          <p className="service-detail-description">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content Section - Full Width Background */}
      <div 
        className="service-detail-content-wrapper"
        style={silverShade ? { backgroundImage: `url(${silverShade})` } : {}}
      >
        <div className="service-detail-content">
          <div className="service-detail-list">
            <span className="service-detail-list-label">What we offer</span>
            <h3 className="service-detail-list-title">
              Our <span className="text-red">{service.servicesTitle}</span><br />
              Include
            </h3>
            <ul className="service-checklist">
              {service.services.map((item, index) => (
                <li key={index} className="service-checklist-item">
                  <span className="service-checklist-icon">
                    <CheckIcon />
                  </span>
                  <span className="service-checklist-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-detail-image">
            {service.image ? (
              <img src={service.image} alt={service.servicesTitle} />
            ) : (
              <div className="service-detail-image-placeholder" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;