import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList"; // Import CardList
import SingleView from "./components/SingleView"; // Import SingleView for detailed view
import Header from "./components/Header"; // Import Header for app header
import "tachyons/css/tachyons.css"; // Import Tachyons for styling

const App = () => {
  // Sample product data
  const productData = [
    {
      id: 1,
      name: "Product 1",
      image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24458108/captain_pikachu.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100", // Placeholder image URL
      tags: ["Tag1", "Tag2"],
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://i.ebayimg.com/images/g/wAIAAOSwPq1mm1vi/s-l1200.jpg", // Placeholder image URL
      tags: ["Tag2", "Tag3"],
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/06/Pikachu-color-model-publicity-cel.jpg", // Placeholder image URL
      tags: ["Tag1", "Tag3"],
    },
    // Add more products as needed
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Passing productData as a prop to CardList */}
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
