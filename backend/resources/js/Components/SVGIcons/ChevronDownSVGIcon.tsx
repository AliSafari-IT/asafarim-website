import React from 'react';

const ChevronDownSVGIcon: React.FC<{ isMenuOpen?: boolean }> = ({ isMenuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`mx-3 h-5 w-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
    strokeWidth={2}
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export default ChevronDownSVGIcon;
