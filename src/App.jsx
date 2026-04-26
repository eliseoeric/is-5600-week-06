import productData from './data/full-products';
import React, { useState, useEffect } from "react";
import productsData from "./data/products";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import SingleProductView from "./components/SingleProductView";
import SearchBar from "./components/SearchBar";

function App() {
  const [products] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // FILTER PRODUCTS BY TAGS OR NAME
  const filtered = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // PAGINATION CALCULATION
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

  // Scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="App">
      <h1>Hello There.</h1>
    <div style={{ padding: "20px" }}>
      <h1>Product Dashboard</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* SINGLE PRODUCT VIEW */}
      {selectedProduct ? (
        <SingleProductView
          product={selectedProduct}
          closeView={() => setSelectedProduct(null)}
        />
      ) : (
        <>
          <ProductList
            products={currentProducts}
            onSelectProduct={setSelectedProduct}
          />

          <Pagination
            totalProducts={filtered.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}