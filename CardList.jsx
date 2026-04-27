// CardList.jsx

import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(filteredData.slice(0, limit));

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  // Search / Filter by tags
  const filterTags = (searchTerm) => {
    const term = searchTerm.toLowerCase();

    const results = data.filter((product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(term)
      )
    );

    setFilteredData(term ? results : data);
    setOffset(0);
  };

  // Pagination function
  const handlePageChange = (direction) => {
    if (direction === "next" && offset + limit < filteredData.length) {
      setOffset(offset + limit);
    }

    if (direction === "prev" && offset > 0) {
      setOffset(offset - limit);
    }
  };

  return (
    <div className="cf pa2">

      {/* Search */}
      <Search handleSearch={filterTags} />

      {/* Cards */}
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange("prev")}
          disabled={offset === 0}
        />

        <Button
          text="Next"
          handleClick={() => handlePageChange("next")}
          disabled={offset + limit >= filteredData.length}
        />
      </div>

    </div>
  );
};

export default CardList;