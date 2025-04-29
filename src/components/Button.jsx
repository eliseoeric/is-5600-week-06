import React from 'react';

const Button = ({ text, handleClick, disabled }) => (
  <button
    className="pa2 ma2 bg-blue white bn br2"
    onClick={handleClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
