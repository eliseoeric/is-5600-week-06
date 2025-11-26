import React from "react";
export default function Button({ text, handleClick, disabled = false }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={
        "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba mr3 " +
        (disabled ? "o-40 pointer-events-none" : "")
      }
    >
      {text}
    </button>
  );
}
