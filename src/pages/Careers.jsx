import React from 'react';

// Assets
import careersHeroBg from "../assets/pages_bg.jpg";
import silverShade from "../assets/silver_shade.png";
import joinTeamImage from "../assets/join_team.png";
import resumeSectionImage from "../assets/resume_section.png";

// Section Components
import CareerHeroSection from "../components/sections/careersections/CareerHeroSection";
import CareersIntroSection from "../components/sections/careersections/CareersIntroSection";
import WhyJoinSection from "../components/sections/careersections/WhyJoinSection";
import SubmitResumeSection from "../components/sections/careersections/SubmitResumeSection";

const Careers = () => {
  return (
    <div className="careers-page">
      {/* Hero Section */}
      <CareerHeroSection 
        backgroundImage={careersHeroBg}
        title="CAREERS"
      />

      {/* Intro Section */}
      <CareersIntroSection />

      {/* Why Join Our Team Section */}
      <WhyJoinSection 
        image={joinTeamImage}
        backgroundImage={silverShade}
      />

      {/* Submit Your Resume Section */}
      <SubmitResumeSection 
        image={resumeSectionImage}
      />
    </div>
  );
};

export default Careers;