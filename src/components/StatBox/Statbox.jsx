import React from 'react';
import './StatBox.css';

const StatBox = ({ number, label1, label2, bgImage }) => {
  return (
    <div className="stat-box">
      {/* Background Image */}
      {bgImage && (
        <img 
          src={bgImage} 
          alt="" 
          className="stat-box-bg"
        />
      )}
      
      {/* Overlay */}
      <div className="stat-box-overlay"></div>
      
      {/* Content - Horizontal Layout */}
      <div className="stat-box-content">
        <div className="stat-box-number">{number}</div>
        <div className="stat-box-label">
          <span>{label1}</span>
          <span>{label2}</span>
        </div>
      </div>
    </div>
  );
};

export default StatBox;