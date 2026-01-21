import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Assets
import projectsBg from "../assets/pages_bg.jpg";
import silverShade from "../assets/silver_shade.png";
import galleryBg from "../assets/gallery_bg.jpg";
import ProjectFeatureImage1 from "../assets/projects_feature_image1.png";
import ProjectFeatureImage2 from "../assets/projects_feature_image2.png";
import ProjectFeatureImage3 from "../assets/projects_feature_image3.png";
import ProjectFeatureImage4 from "../assets/projects_feature_image4.png";
import ProjectFeatureImage5 from "../assets/projects_feature_image5.png";
import ProjectFeatureImage6 from "../assets/projects_feature_image6.png";

// Gallery Images
import ProjectGallery1 from "../assets/project_gallery1.png";
import ProjectGallery2 from "../assets/project_gallery2.png";
import ProjectGallery3 from "../assets/project_gallery3.png";
import ProjectGallery4 from "../assets/project_gallery4.png";
import ProjectGallery5 from "../assets/project_gallery5.png";
import ProjectGallery6 from "../assets/project_gallery6.png";
import ProjectGallery7 from "../assets/project_gallery7.png";
import ProjectGallery8 from "../assets/project_gallery8.png";
import ProjectGallery9 from "../assets/project_gallery9.png";

// Section Components
import ProjectDetailHero from "../components/sections/projectssections/ProjectsDetailSections/ProjectDetailHero";
import ProjectDetailContent from "../components/sections/projectssections/ProjectsDetailSections/ProjectDetailContent";
import ProjectDetailScope from "../components/sections/projectssections/ProjectsDetailSections/ProjectDetailScope";
import ProjectDetailHighlights from "../components/sections/projectssections/ProjectsDetailSections/ProjectDetailHighlights";
import ProjectDetailGallery from "../components/sections/projectssections/ProjectsDetailSections/ProjectDetailGallery";
// import ProjectsCtaSection from '../components/ProjectsctaSection';

const ProjectDetails = () => {
  const { projectId } = useParams();

  // Project Data - In production, fetch from API based on projectId
  const projectsData = {
    'luxury-residential-villa-dubai': {
      id: 1,
      slug: 'luxury-residential-villa-dubai',
      tag: "Residential",
      title: "Luxury Residential Villa – Dubai",
      subtitle: "Complete MEP Engineering Solutions for a High-End Residential Development",
      description: "This luxury residential villa project involved the complete execution of Mechanical, Electrical, Plumbing, Fire Fighting, and Low-Current systems. We were entrusted with delivering a fully integrated MEP infrastructure that ensures comfort, safety, efficiency, and long-term reliability for the homeowners.",
      detailedDescription: "The project demanded premium workmanship, precise coordination with architectural and interior teams, and strict compliance with UAE authority standards.",
      mainImage: ProjectFeatureImage1,
      scopeOfWork: [
        { 
          title: 'Mechanical (HVAC)', 
          items: [
            'VRF / DX air conditioning systems',
            'Fresh air & ventilation systems',
            'GI ducting with insulation',
            'Smoke exhaust & ventilation systems'
          ]
        },
        { 
          title: 'Electrical Engineering', 
          items: [
            'MDB, SMDB & DB installations',
            'Complete power distribution',
            'Lighting & power wiring',
            'Earthing & grounding systems'
          ]
        },
        { 
          title: 'Plumbing & Drainage', 
          items: [
            'Cold & hot water supply systems',
            'Drainage & sanitary piping',
            'Pump & water tank installations',
            'Sanitary ware fixing'
          ]
        },
        { 
          title: 'Fire Fighting & Fire Alarm', 
          items: [
            'Automatic sprinkler systems',
            'Fire pumps & wet risers',
            'Fire alarm & detection systems',
            'Emergency lighting'
          ]
        },
        { 
          title: 'Low-Current (ELV)', 
          items: [
            'CCTV surveillance',
            'Access control systems',
            'Data & communication cabling',
            'Intercom systems'
          ]
        },
      ],
      highlights: [
        'Premium-grade MEP installations',
        'Authority-approved systems',
        'Energy-efficient HVAC design',
        'Clean and organized site execution',
        'On-time project delivery',
      ],
      gallery: [
        ProjectGallery1,
        ProjectGallery2,
        ProjectGallery3,
        ProjectGallery4,
        ProjectGallery5,
        ProjectGallery6,
        ProjectGallery7,
        ProjectGallery8,
        ProjectGallery9,
      ],
    },
    'commercial-office-building-sharjah': {
      id: 2,
      slug: 'commercial-office-building-sharjah',
      tag: "Commercial",
      title: "Commercial Office Building – Sharjah",
      subtitle: "Full-Service MEP Solutions for Modern Office Infrastructure",
      description: "A comprehensive MEP project for a multi-story commercial office building in Sharjah featuring advanced HVAC systems, complete electrical infrastructure, and integrated fire safety systems.",
      detailedDescription: "This commercial project required extensive coordination between multiple MEP disciplines to deliver a fully integrated building management system.",
      mainImage: ProjectFeatureImage2,
      scopeOfWork: [
        { 
          title: 'Mechanical (HVAC)', 
          items: [
            'Chiller plant installation',
            'VAV air conditioning systems',
            'Ventilation & thermal insulation',
            'BMS integration for HVAC'
          ]
        },
        { 
          title: 'Electrical Engineering', 
          items: [
            'MV/LV power distribution',
            'Lighting control systems',
            'UPS & backup power systems',
            'Cable management solutions'
          ]
        },
        { 
          title: 'Plumbing & Drainage', 
          items: [
            'Sanitary systems installation',
            'Water treatment systems',
            'Drainage network design',
            'Pump room installations'
          ]
        },
        { 
          title: 'Fire Fighting & Fire Alarm', 
          items: [
            'Wet riser system',
            'Fire pump installation',
            'Addressable fire alarm',
            'Smoke detection systems'
          ]
        },
        { 
          title: 'Low-Current (ELV)', 
          items: [
            'BMS integration',
            'CCTV & security systems',
            'Access control',
            'PA & announcement systems'
          ]
        },
      ],
      highlights: [
        'LEED-compliant MEP design',
        'Advanced BMS integration',
        'Energy-efficient chiller systems',
        'Seamless consultant coordination',
        'Zero safety incidents',
      ],
      gallery: [
        ProjectGallery2,
        ProjectGallery1,
        ProjectGallery3,
        ProjectGallery4,
        ProjectGallery5,
        ProjectGallery6,
        ProjectGallery7,
        ProjectGallery8,
        ProjectGallery9,
      ],
    },
    'warehouse-facility-jebel-ali': {
      id: 3,
      slug: 'warehouse-facility-jebel-ali',
      tag: "Industrial",
      title: "Warehouse Facility – Jebel Ali",
      subtitle: "Industrial-Grade MEP Infrastructure for Large-Scale Warehouse Operations",
      description: "A major industrial warehouse project in the Jebel Ali Free Zone requiring robust MEP systems designed for heavy-duty operations including specialized ventilation, fire suppression, and electrical distribution.",
      detailedDescription: "This industrial facility demanded specialized MEP solutions including high-capacity ventilation systems and industrial-grade electrical distribution.",
      mainImage: ProjectFeatureImage3,
      scopeOfWork: [
        { 
          title: 'Mechanical (HVAC)', 
          items: [
            'Industrial ventilation systems',
            'Spot cooling solutions',
            'Heavy-duty ducting systems',
            'Exhaust & extraction systems'
          ]
        },
        { 
          title: 'Electrical Engineering', 
          items: [
            'Industrial power distribution',
            'Crane power supply systems',
            'High-bay lighting installation',
            'Emergency power systems'
          ]
        },
        { 
          title: 'Plumbing & Drainage', 
          items: [
            'Industrial drainage systems',
            'Water supply networks',
            'Waste management systems',
            'Floor drainage installation'
          ]
        },
        { 
          title: 'Fire Fighting & Fire Alarm', 
          items: [
            'Foam fire suppression system',
            'Dry riser installation',
            'Industrial fire detection',
            'Emergency evacuation systems'
          ]
        },
        { 
          title: 'Low-Current (ELV)', 
          items: [
            'Industrial CCTV systems',
            'Perimeter security',
            'PA & alarm systems',
            'Access control for facilities'
          ]
        },
      ],
      highlights: [
        'Heavy-duty industrial MEP systems',
        'Specialized fire suppression systems',
        'High-capacity electrical infrastructure',
        'JAFZA compliance certified',
        'Minimal operational downtime',
      ],
      gallery: [
        ProjectGallery3,
        ProjectGallery1,
        ProjectGallery2,
        ProjectGallery4,
        ProjectGallery5,
        ProjectGallery6,
        ProjectGallery7,
        ProjectGallery8,
        ProjectGallery9,
      ],
    },
    'retail-showroom-dubai': {
      id: 4,
      slug: 'retail-showroom-dubai',
      tag: "Commercial",
      title: "Retail Showroom – Dubai",
      subtitle: "Boutique MEP Solutions for Premium Retail Experience",
      description: "A high-end retail showroom project requiring elegant MEP solutions that complement the luxury retail environment while ensuring optimal comfort and safety.",
      detailedDescription: "This boutique retail project demanded invisible yet effective MEP installations with custom-designed systems.",
      mainImage: ProjectFeatureImage4,
      scopeOfWork: [
        { 
          title: 'Mechanical (HVAC)', 
          items: [
            'Concealed AC systems',
            'Precision climate control',
            'Silent operation units',
            'Fresh air integration'
          ]
        },
        { 
          title: 'Electrical Engineering', 
          items: [
            'Display lighting systems',
            'Power track installations',
            'Dimming control systems',
            'Decorative lighting wiring'
          ]
        },
        { 
          title: 'Plumbing & Drainage', 
          items: [
            'Staff facility plumbing',
            'Concealed drainage systems',
            'Water heater installation',
            'Sanitary fixtures'
          ]
        },
        { 
          title: 'Fire Fighting & Fire Alarm', 
          items: [
            'Concealed sprinkler heads',
            'Aesthetic fire detection',
            'Emergency lighting',
            'Evacuation systems'
          ]
        },
        { 
          title: 'Low-Current (ELV)', 
          items: [
            'POS system cabling',
            'Security systems',
            'Background music systems',
            'Digital signage wiring'
          ]
        },
      ],
      highlights: [
        'Aesthetically integrated MEP design',
        'Premium concealed installations',
        'Smart lighting control systems',
        'Dubai Municipality approved',
        'Minimal disruption fit-out',
      ],
      gallery: [
        ProjectGallery4,
        ProjectGallery1,
        ProjectGallery2,
        ProjectGallery3,
        ProjectGallery5,
        ProjectGallery6,
        ProjectGallery7,
        ProjectGallery8,
        ProjectGallery9,
      ],
    },
    'corporate-office-fit-out-abu-dhabi': {
      id: 5,
      slug: 'corporate-office-fit-out-abu-dhabi',
      tag: "Commercial",
      title: "Corporate Office Fit-Out – Abu Dhabi",
      subtitle: "Modern MEP Fit-Out for Corporate Excellence",
      description: "A sophisticated corporate office fit-out project in Abu Dhabi featuring modern MEP systems designed for productivity, comfort, and energy efficiency.",
      detailedDescription: "This corporate fit-out project involved complete MEP modifications to an existing shell and core space.",
      mainImage: ProjectFeatureImage5,
      scopeOfWork: [
        { 
          title: 'Mechanical (HVAC)', 
          items: [
            'VRF system installation',
            'Fresh air handling units',
            'Thermal comfort optimization',
            'Zone temperature control'
          ]
        },
        { 
          title: 'Electrical Engineering', 
          items: [
            'Office power distribution',
            'Task lighting systems',
            'Cable management',
            'UPS installations'
          ]
        },
        { 
          title: 'Plumbing & Drainage', 
          items: [
            'Pantry facility plumbing',
            'Washroom installations',
            'Drainage modifications',
            'Water heater systems'
          ]
        },
        { 
          title: 'Fire Fighting & Fire Alarm', 
          items: [
            'Sprinkler modifications',
            'Fire alarm extension',
            'Emergency lighting',
            'Smoke detection upgrade'
          ]
        },
        { 
          title: 'Low-Current (ELV)', 
          items: [
            'Structured data cabling',
            'AV system installation',
            'Access control systems',
            'Conference room systems'
          ]
        },
      ],
      highlights: [
        'Modern workplace MEP standards',
        'Energy-efficient VRF systems',
        'Smart building integration',
        'ADCD compliance certified',
        'Business continuity maintained',
      ],
      gallery: [
        ProjectGallery5,
        ProjectGallery1,
        ProjectGallery2,
        ProjectGallery3,
        ProjectGallery4,
        ProjectGallery6,
        ProjectGallery7,
        ProjectGallery8,
        ProjectGallery9,
      ],
    },
    'residential-apartment': {
      id: 6,
      slug: 'residential-apartment',
      tag: "Residential",
      title: "Residential Apartment Complex",
      subtitle: "Complete MEP Infrastructure for Multi-Unit Residential Development",
      description: "A large-scale residential apartment complex featuring comprehensive MEP systems serving multiple residential units with central plant and individual unit installations.",
      detailedDescription: "This residential development required coordinated MEP systems including central chilled water plant and individual unit installations.",
      mainImage: ProjectFeatureImage6,
      scopeOfWork: [
        { 
          title: 'Mechanical (HVAC)', 
          items: [
            'Central chiller plant',
            'FCU systems per unit',
            'Common area ventilation',
            'Basement exhaust systems'
          ]
        },
        { 
          title: 'Electrical Engineering', 
          items: [
            'Apartment power distribution',
            'Common area lighting',
            'Generator backup systems',
            'Metering installations'
          ]
        },
        { 
          title: 'Plumbing & Drainage', 
          items: [
            'Riser system installation',
            'Individual unit plumbing',
            'Building drainage network',
            'Pump room setup'
          ]
        },
        { 
          title: 'Fire Fighting & Fire Alarm', 
          items: [
            'Building-wide sprinklers',
            'Centralized fire alarm',
            'Smoke pressurization',
            'Fire pump installation'
          ]
        },
        { 
          title: 'Low-Current (ELV)', 
          items: [
            'Intercom systems',
            'Building-wide CCTV',
            'SMATV distribution',
            'Building automation'
          ]
        },
      ],
      highlights: [
        'Large-scale residential expertise',
        'Central plant design',
        'Multi-unit coordination',
        'Dubai Civil Defense approved',
        'Long-term maintainability',
      ],
      gallery: [
        ProjectGallery6,
        ProjectGallery1,
        ProjectGallery2,
        ProjectGallery3,
        ProjectGallery4,
        ProjectGallery5,
        ProjectGallery7,
        ProjectGallery8,
        ProjectGallery9,
      ],
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      {/* Hero Section */}
      <ProjectDetailHero 
        backgroundImage={projectsBg}
      />

      {/* Content Section */}
      <ProjectDetailContent 
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        detailedDescription={project.detailedDescription}
        mainImage={project.mainImage}
        location={project.location}
        client={project.client}
        duration={project.duration}
        completionYear={project.completionYear}
      />

      {/* Scope of Work Section */}
      <ProjectDetailScope 
        scopeItems={project.scopeOfWork}
        backgroundImage={silverShade}
      />

      {/* Key Highlights Section */}
      <ProjectDetailHighlights 
        highlights={project.highlights}
        mainImage={project.mainImage}
      />

      {/* Gallery Section */}
      <ProjectDetailGallery 
        images={project.gallery}
        projectTitle={project.title}
        backgroundImage={galleryBg}
      />

      {/* CTA Section */}
      {/* <ProjectsCtaSection /> */}

    </div>
  );
};

export default ProjectDetails;