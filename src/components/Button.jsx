import React from 'react'

export default function Button({ text, handleClick, disabled }) {
  return (
    <button 
      className={`f5 no-underline black bg-animate inline-flex items-center pa3 ba border-box mr4 ${
        disabled 
          ? "opacity-50 cursor-not-allowed" // Styles for disabled state
          : "hover-bg-black hover-white pointer" // Styles for active state
      }`}
      onClick={handleClick}
      disabled={disabled} // Actually prevents the click
    >
      <span className="pl1">{text}</span>
    </button>
  )
}