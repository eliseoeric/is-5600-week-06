import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import productData from './data/full-products';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello There.</h1>
      <Header />
      <Routes>
        <Route path="/" element={<CardList data={productData} />} />
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}
export default App;