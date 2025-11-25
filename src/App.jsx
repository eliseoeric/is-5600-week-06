import React from 'react';
import { Routes, Route } from 'react-router-dom';
import productData from './data/full-products.json';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pa3 ph5-ns">
        <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
