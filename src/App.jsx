// src/App.jsx

import { useState, useEffect } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";

function App() {
  // SELECTED PRODUCT FOR SINGLE VIEW
  const [selectedProduct, setSelectedProduct] = useState(null);

  // SEARCH FILTER
  const [searchTerm, setSearchTerm] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // FILTER ITEMS BASED ON TAG SEARCH
  const filteredProducts = products.filter((p) => {
    if (!searchTerm.trim()) return true;
    return (p.tags || [])
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  // PAGINATION CALCULATIONS
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageProducts = filteredProducts.slice(startIndex, endIndex);

  // RESET PAGE WHEN SEARCH CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // SINGLE PRODUCT VIEW
  function renderSingleProduct() {
    const p = selectedProduct;
    return (
      <div className="pa4">
        <button
          className="pa2 mb3 ba b--light-gray br2 pointer"
          onClick={() => setSelectedProduct(null)}
        >
          ← Back to products
        </button>

        <div className="pa3 ba b--light-gray br2">
          <h1 className="f3 mb3">{p.name}</h1>
          <p className="mv2">Price: ${p.price}</p>
          {p.description && <p className="mv2">{p.description}</p>}
          {p.tags && (
            <p className="mv2">
              <b>Tags:</b> {p.tags.join(", ")}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pa4">
      <h1 className="f2 mb4">Product Catalog</h1>

      {selectedProduct ? (
        renderSingleProduct()
      ) : (
        <>
          {/* SEARCH BAR */}
          <div className="mb3">
            <input
              type="text"
              className="pa2 ba b--light-gray br2 w-100"
              placeholder="Search by tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* PAGINATION */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          {/* PRODUCT LIST */}
          <ProductList
            products={currentPageProducts}
            onSelect={setSelectedProduct}
          />
        </>
      )}
    </div>
  );
}

export default App;
