import React from 'react';

export default function Button({ text, handleClick, disabled }) {
  return (
    <button
      className="f6 link dim br2 ba ph3 pv2 mb2 dib black bg-white ma2"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}