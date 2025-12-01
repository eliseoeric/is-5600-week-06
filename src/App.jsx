import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import CardInfo from "./components/CardInfo"; // Details page
import productData from "./data/full-products"; // Make sure path is correct

function App() {
  return (
    <Router>
      <div className="App pa3">
        <Routes>
          {/* Home Page → All Products */}
          <Route path="/" element={<CardList data={productData} />} />

          {/* Product Details Page */}
          <Route path="/products/:id" element={<CardInfo products={productData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

