import React from "react";
//import { Route, Routes} from 'react-router-dom';
import SingleView from './components/SingleView';
import Header from './components/Header';
import CardList from './components/CardList';
import productData from './data/full-products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path="/" element={<CardList data={productData} />} />
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

export default App;