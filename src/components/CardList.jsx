// CardList.jsx
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10; // items per page

  // States
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [filteredData, setFilteredData] = useState(data);

  // 🔍 FILTER BY TAGS
  const filterTags = (searchText) => {
    if (!searchText.trim()) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const lowered = searchText.toLowerCase();

    const filtered = data.filter(product =>
      product.tags.some(tag => tag.toLowerCase().includes(lowered))
    );

    setFilteredData(filtered);
    setOffset(0);
  };

  // ⏭ SINGLE PAGINATION HANDLER
  const handlePageChange = (direction) => {
    if (direction === "next") {
      if (offset + limit >= filteredData.length) return;
      setOffset(offset + limit);
    } else {
      if (offset === 0) return;
      setOffset(offset - limit);
    }
  };

  // 🔄 UPDATE visible products
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">

      {/* Search Bar */}
      <div className="pa3">
        <Search handleSearch={filterTags} />
      </div>

      {/* Products */}
      <div className="mt2 mb2">
        {products.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePageChange("prev")} />

        <Button
          text="Next"
          disabled={offset + limit >= filteredData.length}
          handleClick={() => handlePageChange("next")}
        />
      </div>
    </div>
  );
};

export default CardList;
