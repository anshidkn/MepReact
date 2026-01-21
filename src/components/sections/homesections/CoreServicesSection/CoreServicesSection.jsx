import React from 'react';
import ServiceCard from '../../../ServiceCard';
import './CoreServicesSection.css';

const CoreServicesSection = ({
  serviceImage1,
  serviceImage2,
  serviceImage3,
  serviceImage4,
  serviceImage5,
  serviceImage6
}) => {
  const services = [
    {
      title: "Mechanical",
      subtitle: "(HVAC)",
      description: "DX, VRF/VRV, chilled water systems, ducting, ventilation & smoke management.",
      image: serviceImage1
    },
    {
      title: "Electrical",
      subtitle: "Engineering",
      description: "MDB/SMDB/DB installations, busbar systems, containment, cable laying & full power distribution.",
      image: serviceImage2
    },
    {
      title: "Plumbing &",
      subtitle: "Drainage",
      description: "Water supply, drainage, sanitary ware, tank installation, pump systems & piping networks.",
      image: serviceImage3
    },
    {
      title: "Fire Fighting &",
      subtitle: "Fire Alarm",
      description: "Sprinklers, pumps, wet/dry risers, emergency lighting, HSSD, fire alarm & system commissioning.",
      image: serviceImage4
    },
    {
      title: "Low-Current",
      subtitle: "(ELV)",
      description: "Access control, CCTV, data & communication, AV systems, BMS, lighting control & structured cabling.",
      image: serviceImage5
    },
    {
      title: "AMC & Facility",
      subtitle: "Maintenance",
      description: "Planned preventive maintenance for HVAC, electrical, plumbing, fire safety & ELV systems.",
      image: serviceImage6
    }
  ];

  return (
    <section className="bg-white py-16 md:py-8 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#000000] font-bold mb-4">
            Our <span className="text-[#B20E29]">Core Services</span>
          </h2>
          <p className="text-[#000000] max-w-3xl mx-auto">
            At Al Masaya Electro Mechanical Company, we provide complete end-to-end MEP systems engineering to large-scale infrastructure and high-quality companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="inline-block text-[#000000] font-semibold text-lg border-b-2 border-[#000000] pb-1 hover:text-[#B20E29] transition-colors duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;