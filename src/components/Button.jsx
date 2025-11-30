import React from "react";

export default function Button({ text, handleClick, disabled }) {
  const baseClasses =
    "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4";
  const disabledClasses = " o-50 pointer-events-none";

  return (
    <button
      type="button"
      onClick={disabled ? undefined : handleClick}
      className={baseClasses + (disabled ? disabledClasses : "")}
      disabled={disabled}
    >
      <span className="pl1">{text}</span>
    </button>
  );
}