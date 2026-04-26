import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CardList from "./components/CardList";
import SingleView from "./components/SingleView";
import products from "./data/full-products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CardList data={products} />} />
        <Route path="/product/:id" element={<SingleView data={products} />} />
      </Routes>
    </div>
  );
}

export default App;