import React from "react";
export default function TagFilter({ tags = [], value, onChange }) {
  return (
    <select className="pa2" value={value} onChange={e=>onChange(e.target.value)}>
      <option value="">All tags</option>
      {tags.map(t => <option key={t} value={t}>{t}</option>)}
    </select>
  );
}
