import React from "react";
export default function Pagination({ page, setPage, totalPages }) {
  const prev = () => setPage(p => Math.max(1, p-1));
  const next = () => setPage(p => Math.min(totalPages, p+1));
  const pages = Array.from({ length: totalPages }, (_, i) => i+1);
  return (
    <div className="mt3 flex items-center">
      <button className="mr2 pa2" onClick={prev} disabled={page===1}>Prev</button>
      {pages.map(p => (
        <button key={p} onClick={()=>setPage(p)} className={`mr1 pa2 ${p===page ? "bg-black white" : ""}`}>{p}</button>
      ))}
      <button className="ml2 pa2" onClick={next} disabled={page===totalPages}>Next</button>
    </div>
  );
}
