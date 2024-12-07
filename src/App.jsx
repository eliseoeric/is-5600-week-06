import React from 'react';
import productData from './data/full-products';
import Header from './components/Header';
import CardList from './components/CardList';
import { Route, Routes} from 'react-router-dom';
import SingleView from './components/SingleView';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Route for the homepage displaying the list of products */}
        <Route path="/" element={<CardList data={productData} />} />
        {/* Route for displaying details of a single product */}
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

export default App;