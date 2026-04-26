import React from 'react'

export default function Button({text, handleClick, disabled}) {
  return (
    <a 
      href="#" 
      className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" 
      onClick={!disabled ? handleClick : undefined}
      style={{opacity: disabled ? 0.4 : 1, pointerEvents: disabled ? 'none' : 'auto'}}
    >
      <span className="pl1">{text}</span>
    </a>
  )
}