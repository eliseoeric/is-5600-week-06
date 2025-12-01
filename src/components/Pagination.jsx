import { useState, useEffect } from "react";

export default function Pagination({ data, pageSize, onPageChange }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    onPageChange(data.slice(start, end));
  }, [page]);

  return (
    <div className="flex justify-center pa3">
      <button
        className="pa2 ma2"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <span className="pa2 ma2">Page {page} of {totalPages}</span>

      <button
        className="pa2 ma2"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
