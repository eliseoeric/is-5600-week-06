import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10; // number of products per page

  // State for search filter
  const [filteredData, setFilteredData] = useState(data);

  // Pagination state
  const [offset, setOffset] = useState(0);

  // Currently visible products
  const [products, setProducts] = useState(filteredData.slice(0, limit));

  // Filter products by tag
  const filterTags = (searchTerm) => {
    const term = searchTerm.toLowerCase().trim();

    // When starting a new search, go back to page 1
    setOffset(0);

    if (term === "") {
      setFilteredData(data);
      return;
    }

    const results = data.filter((product) =>
      product.tags.some((tag) => tag.toLowerCase().includes(term))
    );

    setFilteredData(results);
  };

  // Unified pagination function
  const handlePageChange = (direction) => {
    const newOffset = offset + direction * limit;

    // Prevent going outside array bounds
    if (newOffset < 0) return;
    if (newOffset >= filteredData.length) return;

    setOffset(newOffset);
  };

  // Update visible products whenever offset or filtered data changes
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">

      {/* Search bar */}
      <div className="mt3 mb3 flex justify-center">
        <Search handleSearch={filterTags} />
      </div>

      {/* Product Cards */}
      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        ) : (
          <p className="tc">No results found.</p>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange(-1)}
          disabled={offset === 0}
        />

        <Button
          text="Next"
          handleClick={() => handlePageChange(1)}
          disabled={offset + limit >= filteredData.length}
        />
      </div>

    </div>
  );
};

export default CardList;
