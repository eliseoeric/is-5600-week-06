// src/App.jsx
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import productData from './data/full-products.json';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* Home page – shows search + grid + pagination */}
        <Route path="/" element={<CardList data={productData} />} />

        {/* Single product page – shows details for one product */}
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

export default App;
