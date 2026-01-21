import React from 'react';

const CheckItem = ({ text }) => (
  <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
    <span className="text-green-500 flex-shrink-0">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M16.667 5L7.5 14.167 3.333 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="text-gray-800 text-sm md:text-base">{text}</span>
  </div>
);

export default CheckItem;