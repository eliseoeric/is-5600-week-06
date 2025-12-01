import React from 'react'

export default function Button({text, handleClick}) {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
      <span className="pl1">{text}</span>
    </a>
  )
}
// src/components/Button.jsx
import React from "react";

export default function Button({ text, handleClick, disabled = false }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`pa2 ba br2 ${disabled ? "o-50" : "pointer"} mr2`}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
}

