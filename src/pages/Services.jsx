import React from 'react';

// Assets
import servicesBg from "../assets/pages_bg.jpg";
import serviceImg1 from "../assets/service_detail1.png";
import serviceImg2 from "../assets/service_detail2.png";
import serviceImg3 from "../assets/service_detail3.png";
import serviceImg4 from "../assets/service_detail4.png";
import serviceImg5 from "../assets/service_detail5.png";
import serviceImg6 from "../assets/service_detail6.png";

// Section Components
import ServicesHeroSection from "../components/sections/servicessections/ServicesHeroSection";
import ServicesIntroSection from "../components/sections/servicessections/ServicesIntroSection";
import ServicesGridSection from "../components/sections/servicessections/ServicesGridSection";
// import CtaSection from '../components/CtaSection';

const Services = () => {
  const services = [
    {
      id: 'mechanical',
      image: serviceImg1,
      title: 'Mechanical (HVAC)',
      description: 'DX, VRF/VRV, chilled water systems, ducting, ventilation & smoke management.',
    },
    {
      id: 'electrical',
      image: serviceImg2,
      title: 'Electrical Engineering',
      description: 'MDB/SMDB/DB installations, busbar systems, containment, cable laying & full power distribution.',
    },
    {
      id: 'plumbing',
      image: serviceImg3,
      title: 'Plumbing & Drainage',
      description: 'Water supply, drainage, sanitary ware, tank installation, pump systems & piping networks.',
    },
    {
      id: 'fire-fighting',
      image: serviceImg4,
      title: 'Fire Fighting & Fire Alarm',
      description: 'Sprinklers, pumps, hose/dry riser, emergency lighting, HSSD, fire alarm & system commissioning.',
    },
    {
      id: 'low-current',
      image: serviceImg5,
      title: 'Low-Current (ELV)',
      description: 'Access control, CCTV, GRMS, IP communication, AV systems, BMS, lighting, controls & structured cabling.',
    },
    {
      id: 'amc',
      image: serviceImg6,
      title: 'AMC & Facility Maintenance',
      description: 'Preventive/reactive maintenance for HVAC, electrical, plumbing, fire safety & ELV systems.',
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <ServicesHeroSection 
        backgroundImage={servicesBg}
        showTabs={false}
      />

      {/* Intro Section */}
      <ServicesIntroSection />

      {/* Services Grid */}
      <ServicesGridSection services={services} />
      
      {/* CTA Section - appears on all pages */}
      {/* <CtaSection /> */}

    </div>
  );
};

export default Services;