import React from "react";

export default function Button({ text, handleClick, previousAndNext }) {
  const hasData =
    text == "Previous" ? previousAndNext.previous : previousAndNext.next;
  return (
    <a
      className={`f5 no-underline black bg-animate ${hasData ? "hover-bg-black" : "hover-bg-white"} ${hasData ? "hover-white" : "hover-black"} inline-flex items-center pa3 ba border-box mr4`}
      style={{ cursor: hasData ? "pointer" : "not-allowed" }}
      onClick={() => hasData && handleClick(text)}
    >
      <span className="pl1">{text}</span>
    </a>
  );
}
