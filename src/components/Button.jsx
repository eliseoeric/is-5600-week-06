import React from 'react'

export default function Button({text, handleClick}) {
export default function Button({text, handleClick, disabled}) {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
      <span className="pl1">{text}</span>
    </a>
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`pa3 ma2 ${disabled ? 'bg-gray' : 'bg-black'} white pointer`}
    >
      {text}
    </button>
  )
}
