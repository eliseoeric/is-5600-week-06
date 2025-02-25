import React, { useState, useEffect } from "react";
import Card from "./Card"; // Import Card component
import Search from "./Search"; // Import Search component
import Button from "./Button"; // Import Button component

const CardList = ({ data }) => {
  const [filteredProducts, setFilteredProducts] = useState(data); // Filtered products state
  const [offset, setOffset] = useState(0); // Offset for pagination

  // Filter products by tags (search term)
  const filterTags = (searchTerm) => {
    const filtered = data.filter((product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredProducts(filtered);
    setOffset(0); // Reset offset when search is updated
  };

  // Pagination handler (next/previous)
  const handlePagination = (direction) => {
    if (direction === "next" && offset + 5 < filteredProducts.length) {
      setOffset(offset + 5); // Move forward
    } else if (direction === "previous" && offset - 5 >= 0) {
      setOffset(offset - 5); // Move backward
    }
  };

  useEffect(() => {
    setFilteredProducts(data); // Update filtered products when data changes
  }, [data]);

  return (
    <div>
      {/* Search Component */}
      <Search handleSearch={filterTags} />
      <div className="card-list">
        {/* Map over filtered products and render them */}
        {filteredProducts.slice(offset, offset + 5).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination-controls">
        {/* Previous/Next buttons for pagination */}
        <Button
          text="Previous"
          onClick={() => handlePagination("previous")}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          onClick={() => handlePagination("next")}
          disabled={offset + 5 >= filteredProducts.length}
        />
      </div>
    </div>
  );
};

export default CardList;
