import React from 'react'

export default function Button({text, handleClick, disabled}) {
  return (
    <a
      href="#"
      className={`f5 no-underline black bg-animate inline-flex items-center pa3 ba border-box mr4 ${disabled ? 'o-40' : 'hover-bg-black hover-white'}`}
      onClick={disabled ? (e) => e.preventDefault() : handleClick}
      aria-disabled={disabled}
    >
      <span className="pl1">{text}</span>
    </a>
  )
}
