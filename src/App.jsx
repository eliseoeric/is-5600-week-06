// src/components/CardList.jsx
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  // Full dataset after search filter
  const [filteredData, setFilteredData] = useState(data);

  // Pagination offset
  const [offset, setOffset] = useState(0);

  // Products on current page
  const [products, setProducts] = useState(
    data.slice(0, limit)
  );

  // Whenever offset or filtered list changes, update current page
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [filteredData, offset, limit]);

  // Single pagination handler
  const changePage = (direction) => {
    setOffset((prev) => {
      if (direction === "next") {
        const next = prev + limit;
        if (next >= filteredData.length) return prev;
        return next;
      }

      if (direction === "prev") {
        const previous = prev - limit;
        if (previous < 0) return 0;
        return previous;
      }

      return prev;
    });
  };

  // Buttons disable logic
  const canGoPrevious = offset > 0;
  const canGoNext = offset + limit < filteredData.length;

  // Filter by tags
  const filterTags = (term) => {
    const searchTerm = term.trim().toLowerCase();

    if (!searchTerm) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) => {
      if (!product.tags || !Array.isArray(product.tags)) return false;
      return product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredData(filtered);
    setOffset(0);
  };

  return (
    <div className="cf pa2">

      {/* Search bar */}
      <div className="mt3 mb3 flex justify-center">
        <Search handleSearch={filterTags} />
      </div>

      {/* Products */}
      <div className="mt2 mb2">
        {products.length === 0 ? (
          <p className="tc">No products found for this tag.</p>
        ) : (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => changePage("prev")}
          disabled={!canGoPrevious}
        />
        <Button
          text="Next"
          handleClick={() => changePage("next")}
          disabled={!canGoNext}
        />
      </div>

    </div>
  );
};

export default CardList;
