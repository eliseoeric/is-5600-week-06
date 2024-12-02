// Button.jsx
import React from 'react';

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}  // Trigger the handleClick function when the button is clicked
      className="pa2 bg-blue white f6 br2 pointer hover-bg-light-blue"
    >
      {text}  {/* The text prop will display on the button */}
    </button>
  );
};

export default Button;
