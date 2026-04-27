import React from 'react'

export default function Button({text, handleClick}) {
export default function Button({text, handleClick, disabled}) {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
    <a 
      href="#" 
      className={`f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 ${disabled ? 'o-50 pointer-events-none' : ''}`}
      onClick={!disabled ? handleClick : (e) => e.preventDefault()}
    >
      <span className="pl1">{text}</span>
    </a>
  )
}
}