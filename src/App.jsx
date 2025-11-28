import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CardList from "./components/CardList";
import SingleView from "./components/SingleView";

import products from "./data/full-products.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header handleSearch={setSearchTerm} />

      <main className="pa3">
        <Routes>
          <Route
            path="/"
            element={<CardList data={products} searchTerm={searchTerm} />}
          />
          <Route
            path="/product/:id"
            element={<SingleView data={products} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
