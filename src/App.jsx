import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SingleProduct from './components/SingleProduct';
import productData from './data/full-products.json';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <div className="App bg-near-white min-vh-100">
      <Header />
      <main className="pa3 pa5-ns">
        <Routes>
          <Route path="/" element={<ProductList data={products} />} />
          <Route path="/product/:id" element={<SingleProduct data={products} />} />
          <Route path="*" element={<ProductList data={products} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
