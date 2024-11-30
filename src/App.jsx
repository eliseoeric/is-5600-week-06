import React from "react";
import { Route, Routes } from "react-router-dom"; // Import the Route and Routes components
import Header from "./components/Header";
import CardList from "./components/CardList";
import SingleView from "./components/SingleView"; // Import the SingleView component
import productData from "./data/full-products";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Define the routes for the application */}
      <Routes>
        {/* Route for the home page with the CardList component */}
        <Route path="/" element={<CardList data={productData} />} />
        
        {/* Route for the SingleView component, passing product data */}
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

export default App;
