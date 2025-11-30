import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const LIMIT = 10;

const CardList = ({ data }) => {
  // the full list we’re currently working with (after filtering)
  const [filteredData, setFilteredData] = useState(data);
  // where we are in the list
  const [offset, setOffset] = useState(0);
  // the 10 products currently shown on the page
  const [products, setProducts] = useState(filteredData.slice(0, LIMIT));

  // whenever offset or filteredData changes, recompute the current page
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + LIMIT));
  }, [offset, filteredData]);

  // single pagination function (replaces handleNext + handlePrevious)
  const handlePaginate = (step) => {
    const newOffset = offset + step * LIMIT;

    // don’t go before the first page
    if (newOffset < 0) return;

    // don’t go past the end
    if (newOffset >= filteredData.length) return;

    setOffset(newOffset);
  };

  // filter by tags
  const filterTags = (term) => {
    const query = term.trim().toLowerCase();

    if (!query) {
      // reset to original dataset
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) => {
      if (!product.tags || product.tags.length === 0) return false;

      return product.tags.some((tag) =>
        tag.title.toLowerCase().includes(query)
      );
    });

    setFilteredData(filtered);
    setOffset(0);
  };

  const isPrevDisabled = offset === 0;
  const isNextDisabled = offset + LIMIT >= filteredData.length;

  return (
    <div className="cf pa2">
      {/* Search bar above the cards */}
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}

        {products.length === 0 && (
          <p className="tc pa4">No products match that tag.</p>
        )}
      </div>

      {/* Pagination buttons */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePaginate(-1)}
          disabled={isPrevDisabled}
        />
        <Button
          text="Next"
          handleClick={() => handlePaginate(1)}
          disabled={isNextDisabled}
        />
      </div>
    </div>
  );
};

export default CardList;