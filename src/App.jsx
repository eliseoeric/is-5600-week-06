import React from "react";
import CardList from "./components/CardList";
import productData from "./data/full-products";

function App() {
  return (
    <div className="App">
      <h1>Hello There</h1>
      <CardList data={productData} />
    </div>
  );
} 

export default App;