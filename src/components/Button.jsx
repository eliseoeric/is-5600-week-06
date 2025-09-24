import React from "react";

export default function Button({ text, handleClick, disabled }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`ba pa2 ma2 ${disabled ? "o-50" : "pointer dim"}`}
    >
      {text}
    </button>
  );
}
