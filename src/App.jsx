import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <h1>Hello There.</h1>
    </div>
  );
}

export default App;
// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CardList from "./components/CardList";
import SingleView from "./components/SingleView";

// Import your product data.
// If your file is JSON: import productData from './data/full-products.json';
import productData from "./data/full-products"; // adjust extension/path as needed

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="pa3">
        <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
        </Routes>
      </main>
    </div>
  );
}
