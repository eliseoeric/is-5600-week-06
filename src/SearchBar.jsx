import React from "react";
export default function SearchBar({ value, onChange }) {
  return (
    <input className="pa2 ba mr2" placeholder="Search..." value={value} onChange={e=>onChange(e.target.value)} />
  );
}
