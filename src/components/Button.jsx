import React from "react";

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className={`f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue mr2 ml2 ${disabled ? 'o-50 pointer-events-none' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

