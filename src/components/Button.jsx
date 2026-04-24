import React from 'react'

export default function Button({text, handleClick, disabled = false}) {
  const handleClick_safe = (e) => {
    e.preventDefault();
    if (!disabled && handleClick) {
      handleClick();
    }
  };

  const className = disabled
    ? "f5 no-underline black bg-animate inline-flex items-center pa3 ba border-box mr4 o-50 cursor-not-allowed"
    : "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4";

  return (
    <a href="#" className={className} onClick={handleClick_safe}>
      <span className="pl1">{text}</span>
    </a>
  )
}
