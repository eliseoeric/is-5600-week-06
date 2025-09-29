import React, { useState } from "react";
import CardList from "./components/CardList";
import ProductDetail from "./components/ProductDetail";
import Search from "./components/Search";
import productsData from "./data/products";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // filter products by search term (tags or name)
  const filteredProducts = productsData.filter((p) =>
    p.tags.join(" ").toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Product Store</h1>

      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CardList data={filteredProducts} onSelect={setSelectedProduct} />
        </>
      )}
    </div>
  );
};

export default App;
