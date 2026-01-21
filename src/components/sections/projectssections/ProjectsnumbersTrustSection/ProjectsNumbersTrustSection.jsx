import React from 'react';
import './ProjectsnumbersTrustSection.css';

const NumbersTrustSection = ({ backgroundImage }) => {
  const stats = [
    { number: '10+', label1: 'Years of Industry', label2: 'Experience' },
    { number: '50+', label1: 'Projects Successfully', label2: 'Delivered' },
    { number: '30+', label1: 'Skilled', label2: 'Professionals' },
    { number: '100%', label1: 'Compliance with', label2: 'UAE Standards' },
  ];

  return (
    <section className="numbers-trust-section">
      <div className="numbers-trust-container">
        <div className="numbers-trust-header">
          <h2 className="numbers-trust-title">
            Numbers That Build<br /><span className="text-red">Trust</span>
          </h2>
        </div>

        <div className="numbers-trust-stats"
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
        >
          {stats.map((stat, index) => (
            <div key={index} className="numbers-trust-stat">
              <span className="stat-number">{stat.number}</span>
              <div className="stat-label">
                <span>{stat.label1}</span>
                <span>{stat.label2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersTrustSection;