// CardList.jsx
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [activeData, setActiveData] = useState(data);      // filtered list
  const [products, setProducts] = useState(data.slice(0, limit));

  // Recalculate products whenever offset or activeData changes
  useEffect(() => {
    setProducts(activeData.slice(offset, offset + limit));
  }, [offset, activeData]);

  // Single pagination handler
  const handlePageChange = (direction) => {
    if (direction === "next") {
      const newOffset = offset + limit;
      if (newOffset >= activeData.length) return; // prevent going past end
      setOffset(newOffset);
    } else if (direction === "previous") {
      const newOffset = Math.max(offset - limit, 0);
      setOffset(newOffset);
    }
  };

  // Filter products by tag text from Search
  const filterTags = (term) => {
    const searchTerm = term.toLowerCase().trim();

    const filtered = searchTerm
      ? data.filter((product) =>
          product.tags?.some(({ title }) =>
            title.toLowerCase().includes(searchTerm)
          )
        )
      : data;

    setActiveData(filtered);
    setOffset(0); // reset pagination to first page
  };

  const isFirstPage = offset === 0;
  const isLastPage = offset + limit >= activeData.length;

  return (
    <div className="cf pa2">
      {/* Search bar above the cards */}
      <div className="mt2 mb3">
        <Search handleSearch={filterTags} />
      </div>

      <div className="mt2 mb2">
        {/* Render current page of products */}
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange("previous")}
          disabled={isFirstPage}
        />
        <Button
          text="Next"
          handleClick={() => handlePageChange("next")}
          disabled={isLastPage}
        />
      </div>
    </div>
  );
};

export default CardList;
