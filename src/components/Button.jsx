// Button.jsx
import React from 'react';

const Button = ({ text, handleClick, disabled = false }) => {
  return (
    <button
      className={`f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 ${
        disabled ? 'bg-gray o-50' : 'bg-white'
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;