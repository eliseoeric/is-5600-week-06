import React from "react";
export default function Button({ text, handleClick, disabled = false }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={
        "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 " +
        (disabled ? "o-50 pointer-events-none" : "")
      }
      style={{ cursor: disabled ? "default" : "pointer" }}
    >
      <span className="pl1">{text}</span>
    </button>
  );
}
