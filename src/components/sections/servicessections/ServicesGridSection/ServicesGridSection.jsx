import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesGridSection.css";

const ServicesGridSection = ({ services }) => {
  const navigate = useNavigate();

  const defaultServices = [
    {
      id: "mechanical",
      image: null,
      title: "Mechanical (HVAC)",
      description:
        "DX, VRF/VRV, chilled water systems, ducting, ventilation & smoke management.",
    },
    {
      id: "electrical",
      image: null,
      title: "Electrical Engineering",
      description:
        "MDB/SMDB/DB installations, busbar systems, containment, cable laying & full power distribution.",
    },
    {
      id: "plumbing",
      image: null,
      title: "Plumbing & Drainage",
      description:
        "Water supply, drainage, sanitary ware, tank installation, pump systems & piping networks.",
    },
    {
      id: "fire-fighting",
      image: null,
      title: "Fire Fighting & Fire Alarm",
      description:
        "Sprinklers, pumps, hose/dry riser, emergency lighting, HSSD, fire alarm & system commissioning.",
    },
    {
      id: "low-current",
      image: null,
      title: "Low-Current (ELV)",
      description:
        "Access control, CCTV, GRMS, IP communication, AV systems, BMS & structured cabling.",
    },
    {
      id: "amc",
      image: null,
      title: "AMC & Facility Maintenance",
      description:
        "Preventive & reactive maintenance for HVAC, electrical, plumbing & fire systems.",
    },
  ];

  const serviceList = services || defaultServices;

  return (
    <section className="services-grid-section">
      <div className="services-grid-container">
        <div className="services-grid">
          {serviceList.map((service) =>
            service.image ? (
              <div
                key={service.id}
                className="service-tile"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                <div className="service-tile-image">
                  <img src={service.image} alt={service.title} />
                </div>

                <div className="service-tile-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <button className="service-tile-btn">
                    View Service
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
