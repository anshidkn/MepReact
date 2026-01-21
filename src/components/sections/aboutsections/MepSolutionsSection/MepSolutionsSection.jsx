import React from "react";
import "./MepSolutionsSection.css";

const MepSolutionsSection = ({ services }) => {
  return (
    <section className="mep-solutions-section">
      <div className="mep-solutions-container">
        <div className="mep-solutions-header">
          <span className="mep-solutions-label">What We Do</span>
          <h2 className="mep-solutions-title">
            <span className="text-red">Complete MEP Solutions</span><br />Under One Roof
          </h2>
        </div>

        <div className="mep-solutions-grid">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link || "#"}
              className="mep-solution-pill"
            >
              <div className="mep-solution-avatar">
                <img src={service.icon} alt={service.title} />
              </div>

              <div className="mep-solution-text">
                <span className="mep-solution-title">
                  {service.title}
                </span>
                {service.subtitle && (
                  <span className="mep-solution-subtitle">
                    {service.subtitle}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MepSolutionsSection;
