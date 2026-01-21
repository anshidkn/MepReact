import React from 'react';
import CheckItem from '../../../CheckItem';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = ({ homeImage1, homeImage2 }) => {
  const checkItems = [
    "Authority-Approved Work (DEWA, DCD, DM, SEWA, FEWA)",
    "Expert Engineers & Certified Technicians",
    "Transparent Communication & Daily Reporting",
    "Fast & On-Time Project Delivery",
    "100% Compliance with UAE Construction Standards",
    "Competitive Pricing Without Compromising Quality"
  ];

  return (
    <section className="why-choose-section py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left - Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-10 leading-tight text-left">
              <span className="text-[#B20E29] italic">Why</span>{' '}
              <span className="text-gray-900">Builders, Consultants &</span><br />
              <span className="text-gray-900">Developers</span>{' '}
              <span className="text-[#B20E29]">Choose Us:</span>
            </h2>

            <div className="space-y-4">
              {checkItems.map((item, index) => (
                <CheckItem key={index} text={item} />
              ))}
            </div>
          </div>

          {/* Right - Image Grid (Figma Style - Overlapping) */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="why-figma-grid">
              {/* Large top image with rounded TOP-RIGHT corner */}
              <div className="figma-img-large">
                <img
                  src={homeImage1}
                  alt="Engineers working"
                />
              </div>

              {/* Bottom row - overlapping the large image */}
              <div className="figma-bottom-row">
                {/* Small overlapping image */}
                <div className="figma-img-small">
                  <img
                    src={homeImage2}
                    alt="Construction crane"
                  />
                </div>

                {/* Red block */}
                <div className="figma-red-block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;