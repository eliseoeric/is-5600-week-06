import Header from "./components/Header.jsx";
import CardList from "./components/CardList.jsx";
import SingleView from "./components/SingleView.jsx";
import { Routes, Route } from "react-router-dom";

import productDataRaw from "./data/full-products.json";
const productData = Array.isArray(productDataRaw) ? productDataRaw : [];

import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CardList data={productData} />} />
        <Route path="/product/:id" element={<SingleView data={productData} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}