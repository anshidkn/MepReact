import React from 'react';

// Assets
import aboutHeroBg from "../assets/pages_bg.jpg";
import aboutIntroImage from "../assets/about_image1.png";
import trustedPartnerImage from "../assets/about_image2.png";
import safetyImage from "../assets/about_image3.png";
import blueShadeBackground from "../assets/blue_shade_bg.jpg";
import serviceImg1 from "../assets/service_image1.png";
import serviceImg2 from "../assets/service_image2.png";
import serviceImg3 from "../assets/service_image3.png";
import serviceImg4 from "../assets/service_image4.png";
import serviceImg5 from "../assets/service_image5.png";
import serviceImg6 from "../assets/service_image6.png";
import missionImage from "../assets/about_mission.png";
import visionImage from "../assets/about_vision.png";
import missionVisionBg from "../assets/mission_vision_bg.png";

// Section Components
import AboutHeroSection from "../components/sections/aboutsections/AboutHeroSection";
import AboutIntroSection from "../components/sections/aboutsections/AboutIntroSection";
import TrustedPartnerSection from "../components/sections/aboutsections/TrustedPartnerSection";
import MepSolutionsSection from "../components/sections/aboutsections/MepSolutionsSection";
import MissionVisionValuesSection from "../components/sections/aboutsections/MissionVisionValuesSection";
import NumbersTrustSection from "../components/sections/aboutsections/NumbersTrustSection";
import SafetyQualitySection from "../components/sections/aboutsections/SafetyQualitySection";
import CtaSection from '../components/CtaSection';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <AboutHeroSection 
        backgroundImage={aboutHeroBg}
        title="ABOUT US"
      />

      {/* About Intro Section */}
      <AboutIntroSection 
        image={aboutIntroImage}
      />

      {/* Trusted Partner Section */}
      <TrustedPartnerSection 
        image={trustedPartnerImage}
      />

      {/* MEP Solutions Section */}
      <MepSolutionsSection 
        services={[
          { icon: serviceImg1, title: 'Mechanical', subtitle: '& HVAC Systems' },
          { icon: serviceImg2, title: 'Electrical Engineering', subtitle: '& Power Distribution' },
          { icon: serviceImg3, title: 'Plumbing', subtitle: '& Drainage Systems' },
          { icon: serviceImg4, title: 'Fire Fighting', subtitle: '& Fire Alarm Systems' },
          { icon: serviceImg5, title: 'Low-Current / ELV', subtitle: 'Systems' },
          { icon: serviceImg6, title: 'AMC & Facility', subtitle: 'Management Systems' },
        ]}
      />

      {/* Mission, Vision & Core Values Section */}
      <MissionVisionValuesSection 
        missionImage={missionImage}
        visionImage={visionImage}
        backgroundImage={missionVisionBg}
      />

      {/* Numbers That Build Trust Section */}
      <NumbersTrustSection 
        backgroundImage={blueShadeBackground}
      />

      {/* Safety & Quality Commitment Section */}
      <SafetyQualitySection 
        image={safetyImage}
      />

      {/* CTA Section - appears on all pages */}
      <CtaSection />

    </div>
  );
};

export default AboutUs;