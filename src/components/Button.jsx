import React from 'react';

export default function Button({ text, handleClick, disabled = false }) {
  const classes = `f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr3 br2 ${
    disabled ? 'o-50' : 'pointer'
  }`;

  return (
    <button type="button" className={classes} onClick={handleClick} disabled={disabled}>
      <span className="pl1">{text}</span>
    </button>
  );
}
