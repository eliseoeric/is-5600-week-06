import React from 'react';

export default function Button({ text, handleClick, disabled }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
    >
      <span className="pl1">{text}</span>
    </button>
  );
}