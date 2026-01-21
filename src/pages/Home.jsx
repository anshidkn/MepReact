import React from 'react';

// Assets
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";
import firstImage from "../assets/first_image.png";
import secondImage from "../assets/second_image.png";
import thirdImage from "../assets/third_image.png";
import trustedMep from "../assets/trusted_mep.png";
import silverImage from "../assets/silver_image.png";
import HomeImage1 from "../assets/home_image_1.png";
import HomeImage2 from "../assets/home_image_2.png";
import IndustrySlideImage1 from "../assets/industry_slide_image1.jpg";
import IndustrySlideImage2 from "../assets/industry_slide_image2.jpg";
import IndustrySlideImage3 from "../assets/industry_slide_image3.jpg";
import IndustrySlideImage4 from "../assets/industry_slide_image4.jpg";
import ServiceImage1 from "../assets/service_image1.png";
import ServiceImage2 from "../assets/service_image2.png";
import ServiceImage3 from "../assets/service_image3.png";
import ServiceImage4 from "../assets/service_image4.png";
import ServiceImage5 from "../assets/service_image5.png";
import ServiceImage6 from "../assets/service_image6.png";
import projectExcellenceImage1 from "../assets/projectexcellence_image1.png";
import projectExcellenceImage2 from "../assets/projectexcellence_image2.png";
import projectExcellenceImage3 from "../assets/projectexcellence_image3.png";

// Section Components
import HeroSection from "../components/sections/homesections/HeroSection";
import PartnersSection from "../components/sections/homesections/PartnersSection";
import TrustedMepSection from "../components/sections/homesections/TrustedMepSection";
import WhyChooseUsSection from "../components/sections/homesections/WhyChooseUsSection";
import CoreServicesSection from "../components/sections/homesections/CoreServicesSection";
import IndustriesSection from "../components/sections/homesections/IndustriesSection";
import ProjectExcellenceSection from "../components/sections/homesections/ProjectExcellenceSection";
import TestimonialsSection from "../components/sections/homesections/TestimonialsSection";
import CtaSection from '../components/CtaSection';

const Home = () => {
  // Slider images array
  const sliderImages = [firstImage, secondImage, thirdImage];

  // Partner logos array
  const partnerLogos = [logo1, logo2, logo3, logo1, logo2, logo3];

  return (
    <div className="home-page">
      {/* Hero Section with Slider */}
      <HeroSection sliderImages={sliderImages} />

      {/* Partner Logos Section */}
      <PartnersSection logos={partnerLogos} />

      {/* Trusted MEP Partner Section */}
      <TrustedMepSection
        trustedMepImage={trustedMep}
        silverImage={silverImage}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        homeImage1={HomeImage1}
        homeImage2={HomeImage2}
      />

      {/* Core Services Section */}
      <CoreServicesSection
        serviceImage1={ServiceImage1}
        serviceImage2={ServiceImage2}
        serviceImage3={ServiceImage3}
        serviceImage4={ServiceImage4}
        serviceImage5={ServiceImage5}
        serviceImage6={ServiceImage6}
      />

      {/* Industries We Serve Section */}
      <IndustriesSection
        industrySlideImage1={IndustrySlideImage1}
        industrySlideImage2={IndustrySlideImage2}
        industrySlideImage3={IndustrySlideImage3}
        industrySlideImage4={IndustrySlideImage4}
      />

      {/* Project Excellence Section */}
      <ProjectExcellenceSection
        projectExcellenceImage1={projectExcellenceImage1}
        projectExcellenceImage2={projectExcellenceImage2}
        projectExcellenceImage3={projectExcellenceImage3}
      />

      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section - appears on all pages */}
      <CtaSection />

    </div>
  );
};

export default Home;