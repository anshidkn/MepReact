import React from 'react';

// Assets
import projectsBg from "../assets/pages_bg.jpg";
import silverShade from "../assets/silver_shade.png";
import projectImg1 from "../assets/projects_image1.png";
import projectImg2 from "../assets/projects_image2.png";
import ProjectFeatureImage1 from "../assets/projects_feature_image1.png";
import ProjectFeatureImage2 from "../assets/projects_feature_image2.png";
import ProjectFeatureImage3 from "../assets/projects_feature_image3.png";
import ProjectFeatureImage4 from "../assets/projects_feature_image4.png";
import ProjectFeatureImage5 from "../assets/projects_feature_image5.png";
import ProjectFeatureImage6 from "../assets/projects_feature_image6.png";
import blueShadeBackground from "../assets/blue_shade_bg.jpg";

// Section Components
import ProjectsHeroSection from "../components/sections/projectssections/ProjectsHeroSection";
import ProjectsIntroSection from "../components/sections/projectssections/ProjectsIntroSection";
import ProjectsExperienceSection from "../components/sections/projectssections/ProjectsExperienceSection";
import ProjectsFeaturedSection from "../components/sections/projectssections/ProjectsFeaturedSection";
import ProjectsnumbersTrustSection from "../components/sections/projectssections/ProjectsnumbersTrustSection";
// import ProjectsCtaSection from '../components/ProjectsctaSection';


const Projects = () => {
  // Featured Projects Data
  const featuredProjects = [
    {
      id: 1,
      image: ProjectFeatureImage1,
      tag: "Residential",
      title: "Luxury Residential Villa – Dubai",
      description: "Complete MEP services including HVAC, DHW systems, electrical power distribution, fire fighting, drainage, and fire fighting systems integration."
    },
    {
      id: 2,
      image: ProjectFeatureImage2,
      tag: "Commercial",
      title: "Commercial Office Building – Sharjah",
      description: "Full-service HVAC systems, chillers/air-cooled DX systems, fire alarm, firefighting, BMS integration."
    },
    {
      id: 3,
      image: ProjectFeatureImage3,
      tag: "Industrial",
      title: "Warehouse Facility – Jebel Ali",
      description: "Ducting, piping, facade systems, fire fighting (wet/dry/foam), ventilation systems, and low current systems."
    },
    {
      id: 4,
      image: ProjectFeatureImage4,
      tag: "Commercial",
      title: "Retail Showroom – Dubai",
      description: "Boutique MEP services including HVAC, DHW systems, electrical power distribution, fire fighting, drainage, and fire fighting."
    },
    {
      id: 5,
      image: ProjectFeatureImage5,
      tag: "Commercial",
      title: "Corporate Office Fit-Out – Abu Dhabi",
      description: "Mechanical and HVAC systems specialized services, DX systems, fire alarm, firefighter, accident integration."
    },
    {
      id: 6,
      image: ProjectFeatureImage6,
      tag: "Residential",
      title: "Residential Apartment",
      description: "Luxury residential apartment complex with complete MEP infrastructure."
    }
  ];

  // Stats Data
  const stats = [
    {
      value: "10+",
      label: "Years of Industry Experience"
    },
    {
      value: "50+",
      label: "Projects Successfully Delivered"
    },
    {
      value: "30+",
      label: "Skilled Professionals"
    },
    {
      value: "100%",
      label: "Compliance with UAE Standards"
    }
  ];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <ProjectsHeroSection 
        backgroundImage={projectsBg}
      />

      {/* Intro Section */}
      <ProjectsIntroSection 
        label="Projects"
        title="Delivering reliable, compliant, and high-performance"
        titleHighlight="MEP solutions"
        description="Every project we deliver reflects our commitment to engineering excellence, safety, and timely execution. From residential villas to large commercial and industrial facilities, Al Muqayil Electro Mechanical Company has successfully executed MEP works that meet the highest quality and regulatory standards."
        image1={projectImg1}
        image2={projectImg2}
      />

      {/* Experience Section */}
      <ProjectsExperienceSection 
        titleRed="Proven Experience"
        titleBlack="You Can Rely On"
        description="At Al Muqayil Electro Mechanical Company, we approach every project with detailed planning, precise execution, and strict compliance with UAE & SIRA regulations. Our experienced engineers and site teams work closely with consultants, contractors, and clients to ensure seamless coordination and on-time project delivery."
        image={projectImg2}
        backgroundImage={silverShade}
      />

      {/* Featured Projects Section */}
      <ProjectsFeaturedSection 
        title="Featured"
        titleHighlight="Projects"
        projects={featuredProjects}
      />

      {/* Stats Section */}
      <ProjectsnumbersTrustSection
        backgroundImage={blueShadeBackground}
      />
      
      {/* CTA Section - appears on all pages */}
      {/* <ProjectsCtaSection /> */}

    </div>
  );
};

export default Projects;