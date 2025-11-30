import React from 'react'

export default function Button({text, handleClick}) {
const Button = ({ text, handleClick, isDisabled }) => {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
      <span className="pl1">{text}</span>
    </a>
  )
}
    <button
      className="f6 link dim br-pill ba ph3 pv2 ma2 dib dark-gray"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;