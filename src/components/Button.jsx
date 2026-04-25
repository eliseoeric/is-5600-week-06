import React from 'react';

export default function Button({ text, handleClick, disabled }) {
  return (
    <button
      type="button"
      className={`f5 black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba b--black mr4 ${disabled ? 'o-50' : 'pointer'}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="pl1">{text}</span>
    </button>
  );
}
