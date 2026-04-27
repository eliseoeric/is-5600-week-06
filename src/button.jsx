import React from 'react'

export default function Button({text, handleClick}) {
const Button = ({ text, handleClick, disabled = false }) => {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
      <span className="pl1">{text}</span>
    </a>
  )
}
    <button
      className="f6 link dim br2 ph3 pv2 mb2 dib white bg-blue bn"
      onClick={handleClick}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {text}
    </button>
  );
};