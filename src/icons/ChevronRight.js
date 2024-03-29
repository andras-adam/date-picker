import React from 'react';

// Return 'ChevronRight' icon
const ChevronRight = ({ id, className }) => (
   <svg id={id} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      <path fill="none" d="M0 0h24v24H0z" />
   </svg>
);

export { ChevronRight };
