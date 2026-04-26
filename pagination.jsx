import React from "react";

function Pagination({ totalProducts, productsPerPage, setCurrentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          style={{ margin: "5px" }}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;