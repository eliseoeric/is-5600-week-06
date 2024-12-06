import React from 'react'

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button 
    onClick={handleClick}
    disabled={disabled}
    className={`f6 link dim br3 ph3 pv2 mb2 dib white bg-black ma2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {text}
  </button>
);
};

export default Button;