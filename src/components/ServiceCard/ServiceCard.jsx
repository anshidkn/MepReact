import React from 'react';

const ServiceCard = ({ title, subtitle, description, image }) => (
  <div className="service-card">
    <div className="service-card-top">
      <div className="service-card-img">
        <img src={image} alt={title} />
      </div>

      <h3 className="service-card-title">
        {title}
        <span className="service-card-subtitle">{subtitle}</span>
      </h3>
    </div>

    <p className="service-card-desc">{description}</p>
  </div>
);

export default ServiceCard;