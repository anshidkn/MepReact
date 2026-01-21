import React from 'react';

export default function FeatureIcon({ icon, title }) {
  return (
    <div className="text-center flex flex-col items-center gap-2 p-2 hover:scale-105 transition-transform duration-300">
      <img
        src={icon}
        alt={title || "Partner logo"}
        className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
      {title && (
        <p className="text-xs md:text-sm text-gray-500 font-medium">{title}</p>
      )}
    </div>
  );
}