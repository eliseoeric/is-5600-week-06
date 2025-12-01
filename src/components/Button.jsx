import React from 'react'

export default function Button({text, handleClick}) {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
      <span className="pl1">{text}</span>
    </a>
  )
}
// src/components/Button.jsx
import React from 'react';

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="pa2 br2 bb0 b--black-20 bg-white"
      style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      {text}
    </button>
  );
};

export default Button;
