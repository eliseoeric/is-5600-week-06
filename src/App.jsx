import React, { useState, useEffect } from "react";
import productData from "./data/full-products";

import Header from "./components/Header";
import CardList from "./components/CardList";
import Search from "./components/Search";
import SingleView from "./components/SingleView";

import { Routes, Route } from "react-router-dom";

function App() {
  const [products] = useState(productData);
  const [searchField, setSearchField] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // RESET PAGE ON SEARCH
  useEffect(() => {
    setCurrentPage(1);
  }, [searchField]);

  // FILTER FIRST (IMPORTANT FIX)
  const filteredAllProducts = products.filter((product) =>
    product.tags.join(" ").toLowerCase().includes(searchField.toLowerCase())
  );

  // PAGINATION
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;

  const currentProducts = filteredAllProducts.slice(indexOfFirst, indexOfLast);

  // PAGINATION CONTROLS
  const nextPage = () => {
    if (indexOfLast < filteredAllProducts.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Header />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Search handleSearch={setSearchField} />

              <CardList products={currentProducts} />

              {/* PAGINATION */}
              <div className="tc pa3">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="pa2 ma2 ba br2 pointer"
                >
                  Prev
                </button>

                <span className="mh2">
                  Page {currentPage}
                </span>

                <button
                  onClick={nextPage}
                  disabled={indexOfLast >= filteredAllProducts.length}
                  className="pa2 ma2 ba br2 pointer"
                >
                  Next
                </button>
              </div>
            </>
          }
        />

        {/* SINGLE VIEW */}
        <Route
          path="/products/:id"
          element={<SingleView data={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
