import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import productData from "./data/full-products.json";

import CardList from "./components/CardList";
import SingleView from "./components/SingleView";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [products] = useState(productData);
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleSearch = (term) => {
    if (!term.trim()) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((p) =>
      p.tags.some((t) =>
        t.title.toLowerCase().includes(term.toLowerCase())
      )
    );

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const indexLast = currentPage * itemsPerPage;
  const indexFirst = indexLast - itemsPerPage;
  const currentItems = filteredProducts.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="mw9 center pa3">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search handleSearch={handleSearch} />
              <CardList data={currentItems} />

              <div className="flex justify-center mt4">
                <button
                  onClick={() =>
                    setCurrentPage(Math.max(1, currentPage - 1))
                  }
                  className="pa2 mh2 bg-black white br2"
                >
                  Prev
                </button>

                <span className="pa2">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  className="pa2 mh2 bg-black white br2"
                >
                  Next
                </button>
              </div>
            </>
          }
        />

        <Route
          path="/product/:id"
          element={<SingleView data={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
