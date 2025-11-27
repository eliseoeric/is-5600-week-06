import React from 'react'

export default function Button({ text, handleClick, disabled }) {
  const baseClasses =
    "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4";

  // Add Tachyons helpers when disabled: lower opacity + no pointer events
  const classes = disabled
    ? baseClasses + " o-50 pointer-events-none"
    : baseClasses;

  const onClick = (e) => {
    // Prevent jumping to top of page
    e.preventDefault();
    if (!disabled && typeof handleClick === "function") {
      handleClick(e);
    }
  };

  return (
    <a href="#" className={classes} onClick={onClick}>
      <span className="pl1">{text}</span>
    </a>
  );
}
