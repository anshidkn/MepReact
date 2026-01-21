import React from 'react';
import StatBox from '../../../StatBox';
import './TrustedMepSection.css';

const TrustedMepSection = ({ trustedMepImage, silverImage }) => {
  return (
    <section className="bg-white py-10 md:py-15 mx-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-4">
          {/* Left - Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <img
              src={trustedMepImage}
              alt="MEP Engineer"
              className="arc-image w-full h-auto shadow-xl object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 leading-tight text-center lg:text-left">
              <span className="text-[#B20E29]">Trusted MEP Partner</span><br />
              <span className="text-gray-900">for Your Next Project</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg text-center lg:text-left">
              Al Masaya Electro Mechanical Company is more than an MEP contractor—we are engineering partners who ensure your project is delivered safely, efficiently, and on time. Our team combines technical expertise, UAE regulatory experience, and strong project management to deliver guaranteed results.
            </p>

            {/* Stats Boxes */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <StatBox
                number="10"
                label1="Years of"
                label2="Experience"
                bgImage={silverImage}
              />
              <StatBox
                number="300+"
                label1="Happy"
                label2="Customers"
                bgImage={silverImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedMepSection;