import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesHeroSection.css";

const ServicesHeroSection = ({ backgroundImage, activeTab, showTabs = true }) => {
  const navigate = useNavigate();

  const tabs = [
    { id: "mechanical", label: "Mechanical (HVAC)" },
    { id: "electrical", label: "Electrical Engineering" },
    { id: "plumbing", label: "Plumbing & Drainage" },
    { id: "fire-fighting", label: "Fire Fighting & Fire Alarm" },
    { id: "low-current", label: "Low-Current (ELV)" },
    { id: "amc", label: "AMC & Facility Maintenance" },
  ];

  const getTabClasses = (tabId, index) => {
    let classes = "services-tab";
    
    if (activeTab === tabId) {
      classes += " active";
      
      // Add position class for proper border-radius
      if (index === 0) {
        classes += " active-first";
      } else if (index === tabs.length - 1) {
        classes += " active-last";
      } else {
        classes += " active-middle";
      }
    }
    
    return classes;
  };

  return (
    <section
      className="services-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="services-hero-overlay" />

      <div className="services-hero-content">
        <h1 className="services-hero-title">OUR SERVICES</h1>

        {showTabs && (
          <div className="services-tabs-wrapper">
            <div className="services-tabs">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  className={getTabClasses(tab.id, index)}
                  onClick={() => navigate(`/services/${tab.id}`)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesHeroSection;