import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Assets
import servicesBg from "../assets/pages_bg.jpg";
import silverShade from "../assets/silver_shade.png";
import serviceImg1 from "../assets/service_detail1.png";
import serviceImg2 from "../assets/service_detail2.png";
import serviceImg3 from "../assets/service_detail3.png";
import serviceImg4 from "../assets/service_detail4.png";
import serviceImg5 from "../assets/service_detail5.png";
import serviceImg6 from "../assets/service_detail6.png";
// Section Components
import ServicesHeroSection from "../components/sections/servicessections/ServicesHeroSection";
import ServiceDetailSection from "../components/sections/servicessections/ServiceDetailSection";
import CtaSection from '../components/CtaSection';

// Service Data
const servicesData = {
  'mechanical': {
    breadcrumb: 'Mechanical (HVAC)',
    category: 'Mechanical (HVAC) Engineering Solutions',
    title: 'Efficient, reliable, and compliant HVAC systems',
    titleHighlight: 'engineered for comfort and performance.',
    description: 'Al Masaya Electro Mechanical Company delivers complete Mechanical and HVAC solutions designed to provide optimal indoor comfort, energy efficiency, and long-term system reliability. Our HVAC systems are engineered to meet UAE authority standards and are tailored to suit residential, commercial and industrial requirements. From system design and equipment selection to installation, testing and commissioning, we ensure seamless execution at every stage of the project.',
    servicesTitle: 'HVAC Services',
    services: [
      'DX, VRF / VRV & Chilled Water Systems',
      'Air Handling Units (AHU), Fresh Air Handling Units (FAHU)',
      'Package Units & Rooftop Units',
      'Ventilation & Fresh Air Systems',
      'GI & PI Duct Fabrication and Installation',
      'Smoke Management & Extraction Systems',
    ],
    image: serviceImg1,
  },
  'electrical': {
    breadcrumb: 'Electrical Engineering',
    category: 'Electrical Engineering Solutions',
    title: 'Safe, efficient, and code-compliant electrical systems',
    titleHighlight: 'engineered for reliability and performance.',
    description: 'Al Masaya Electro Mechanical Company provides comprehensive electrical engineering services covering design, installation, testing, and commissioning. Our electrical systems are built to meet DEWA, SEWA, FEWA, and international standards, ensuring safety, efficiency, and long-term reliability for residential, commercial, and industrial projects.',
    servicesTitle: 'Electrical Services',
    services: [
      'MDB/SMDB/DB Panel Installation',
      'Busbar Trunking Systems',
      'Cable Tray & Containment Systems',
      'LV & MV Cable Laying & Termination',
      'Lighting & Small Power Installation',
      'Earthing & Lightning Protection Systems',
    ],
    image: serviceImg2,
  },
  'plumbing': {
    breadcrumb: 'Plumbing & Drainage',
    category: 'Plumbing & Drainage Solutions',
    title: 'Reliable plumbing systems designed for',
    titleHighlight: 'efficiency, hygiene, and durability.',
    description: 'Al Masaya Electro Mechanical Company delivers complete plumbing and drainage solutions for residential, commercial, and industrial projects. Our systems are designed and installed to meet local authority requirements and international standards, ensuring efficient water distribution, proper drainage, and long-term system reliability.',
    servicesTitle: 'Plumbing Services',
    services: [
      'Hot & Cold Water Supply Systems',
      'Drainage & Waste Water Systems',
      'Sanitary Ware Installation',
      'Water Tank Installation & Piping',
      'Pump Systems & Booster Sets',
      'Rainwater Drainage Systems',
    ],
    image: serviceImg3,
  },
  'fire-fighting': {
    breadcrumb: 'Fire Fighting & Fire Alarm',
    category: 'Fire Fighting & Fire Alarm Solutions',
    title: 'Life-safety systems engineered for',
    titleHighlight: 'protection, compliance, and peace of mind.',
    description: 'Al Masaya Electro Mechanical Company provides comprehensive fire fighting and fire alarm solutions designed to protect lives and property. Our systems are engineered to meet Civil Defense requirements and international fire safety standards, ensuring reliable detection, suppression, and emergency response capabilities.',
    servicesTitle: 'Fire Safety Services',
    services: [
      'Fire Sprinkler Systems',
      'Fire Pump Installation',
      'Hose Reel & Dry Riser Systems',
      'Fire Alarm & Detection Systems',
      'Emergency Lighting Systems',
      'Fire Extinguisher Supply & Installation',
    ],
    image: serviceImg4,
  },
  'low-current': {
    breadcrumb: 'Low-Current (ELV)',
    category: 'Low-Current (ELV) System Solutions',
    title: 'Smart building systems for',
    titleHighlight: 'security, communication, and automation.',
    description: 'Al Masaya Electro Mechanical Company delivers complete Extra Low Voltage (ELV) solutions for modern buildings. Our systems integrate security, communication, and building automation technologies to create intelligent, efficient, and secure environments for residential, commercial, and industrial facilities.',
    servicesTitle: 'ELV Services',
    services: [
      'Access Control Systems',
      'CCTV & Video Surveillance',
      'Structured Cabling Systems',
      'Public Address & Voice Alarm',
      'Building Management Systems (BMS)',
      'Audio Visual & Conference Systems',
    ],
    image: serviceImg5,
  },
  'amc': {
    breadcrumb: 'AMC & Facility Maintenance',
    category: 'AMC & Facility Maintenance Solutions',
    title: 'Comprehensive maintenance services for',
    titleHighlight: 'optimal system performance and longevity.',
    description: 'Al Masaya Electro Mechanical Company provides Annual Maintenance Contracts (AMC) and facility maintenance services to ensure your MEP systems operate at peak efficiency. Our preventive and reactive maintenance programs are designed to minimize downtime, reduce operating costs, and extend equipment life.',
    servicesTitle: 'Maintenance Services',
    services: [
      'HVAC System Maintenance',
      'Electrical System Maintenance',
      'Plumbing System Maintenance',
      'Fire Safety System Maintenance',
      'ELV System Maintenance',
      '24/7 Emergency Support',
    ],
    image: serviceImg6,
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // Check if service exists
  const service = servicesData[serviceId];
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section with Tabs */}
      <ServicesHeroSection 
        backgroundImage={servicesBg}
        activeTab={serviceId}
        showTabs={true}
      />

      {/* Service Detail Section */}
      <ServiceDetailSection 
        service={service}
        silverShade={silverShade} 
      />
      
      {/* CTA Section - appears on all pages */}
      <CtaSection />

    </div>
  );
};

export default ServiceDetail;