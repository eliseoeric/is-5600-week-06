import React from 'react'

export default function Button({text, handleClick, disabled = false}) {
  return (
    <a
      href="#"
      className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
      onClick={handleClick}
      aria-disabled={disabled}
      style={disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}
    >
      <span className="pl1">{text}</span>
    </a>
  )
}