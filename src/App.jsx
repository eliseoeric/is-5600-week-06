import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CardList from "./components/CardList";
import SingleView from "./components/SingleView";
import productData from "./data/full-products";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route
            path="/product/:id"
            element={<SingleView data={productData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
