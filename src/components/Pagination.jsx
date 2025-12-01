// src/components/Pagination.jsx

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt3 flex items-center">
      <button
        className="pa2 ba b--light-gray br2 mr2 pointer"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={
            "pa2 ba b--light-gray br2 mh1 pointer " +
            (p === currentPage ? "bg-light-blue" : "")
          }
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        className="pa2 ba b--light-gray br2 ml2 pointer"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
