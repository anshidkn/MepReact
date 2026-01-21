import React from 'react';
import FeatureIcon from '../../../FeatureIcon';
import './PartnersSection.css';

const PartnersSection = ({ logos }) => {
  return (
    <section className="bg-white py-8 shadow-lg relative -mt-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center">
          {logos.map((logo, index) => (
            <FeatureIcon key={index} icon={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;