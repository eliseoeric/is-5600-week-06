import React from 'react'

export default function Button({text, handleClick}) {
const Button = ({ text, handleClick, disabled }) => {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
      <span className="pl1">{text}</span>
    </a>
  )
}
    <button
      className={`pa3 mr2 ba ${
        disabled ? "bg-light-gray" : "bg-light-blue"
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;