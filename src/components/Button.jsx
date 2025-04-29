import React from 'react';

const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue mr2 ${
        disabled ? 'o-50' : ''
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
