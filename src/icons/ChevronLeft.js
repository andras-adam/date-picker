import React from 'react';

// Return 'ChevronLeft' icon
const ChevronLeft = ({ id, className }) => (
   <svg id={id} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      <path fill="none" d="M0 0h24v24H0z" />
   </svg>
);

export { ChevronLeft };
