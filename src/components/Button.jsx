import React from 'react';

export default function Button({ text, handleClick, disabled = false }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`f5 black bg-animate inline-flex items-center pa3 ba border-box mr4 ${disabled ? 'o-50' : 'hover-bg-black hover-white pointer'}`}
      onClick={handleClick}
    >
      <span className="pl1">{text}</span>
    </button>
  );
}
