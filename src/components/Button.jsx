import React from 'react'

export default function Button({text, handleClick, disabled}) {
  return (
    <a href="#" className={`f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4`}
    onClick={(e) => {
      if (disabled) {
        e.preventDefault();
        return;
      } else {
        handleClick(e);
      }
    }}>
      <span className="pl1">{text}</span>
    </a>
  )
}
