import React from 'react'

export default function Button({ text, handleClick, disabled }) {
  return (
    <button
      className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
      onClick={handleClick}
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <span className="pl1">{text}</span>
    </button>
  );
}
