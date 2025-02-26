import React from 'react';

// Reusable Button component that triggers a function when clicked
export default function Button({ text, handleClick }) {
  return (
    // Styled anchor tag acting as a button
    <a 
      href="#" 
      className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" 
      onClick={handleClick} // Calls the provided function when clicked
    >
      {/* Display button text */}
      <span className="pl1">{text}</span>
    </a>
  );
}

