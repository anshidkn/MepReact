import React from 'react';
import './IndustriesSection.css';

const IndustriesSection = ({
  industrySlideImage1,
  industrySlideImage2,
  industrySlideImage3,
  industrySlideImage4
 }) => {
  const industries = [
    {
      title: ["Residential Buildings &", "Compounds"],
      image: industrySlideImage1
    },
    {
      title: ["Commercial Buildings", "and Offices"],
      image: industrySlideImage2
    },
    {
      title: ["Retail &", "Showrooms"],
      image: industrySlideImage3
    },
    {
      title: ["Warehouses &", "Industrial Facilities"],
      image: industrySlideImage4
    },
    {
      title: ["Restaurants &", "Hospitality Spaces"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
    },
    {
      title: ["Schools, Clinics &", "Healthcare Facilities"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section className="industries-section">
      <div>
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2>
              Industries <span>We Serve</span>
            </h2>
            <p>
              Our solutions support the UAE's growing infrastructure across multiple sectors.
            </p>
          </div>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="industries-carousel-wrapper">
          <div className="industries-carousel-track">
            {duplicatedIndustries.map((industry, index) => (
              <div className="industry-card" key={index}>
                <div className="industry-card-image">
                  <img src={industry.image} alt={industry.title.join(' ')} />
                </div>
                
                {/* Ribbon Label with Folded Corners */}
                <div className="industry-card-label-wrapper">
                  <div className="industry-card-label">
                    <div>
                      {industry.title.map((line, lineIndex) => (
                        <span key={lineIndex}>{line}</span>
                      ))}
                    </div>
                  </div>
                  <div className="industry-card-label-folds">
                    <div className="fold-left"></div>
                    <div className="fold-right"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;