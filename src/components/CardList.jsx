import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  // 1. Setup State
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  // 2. Optimized Pagination Function (Task 2a)
  // Takes a "direction" (1 for next, -1 for previous)
  const handlePagination = (direction) => {
    setOffset(offset + (direction * limit));
  };

  // 3. Filter Tags Function (Task 1b)
  const filterTags = (searchTerm) => {
    const filtered = data.filter((product) =>
      product.tags.some((tag) => 
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    // Reset to start of results
    setOffset(0); 
    setProducts(filtered.slice(0, limit));
  };

  // 4. Update products when offset changes (Step 7 in instructions)
  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  return (
    <div className="cf pa2">
      {/* Search Component (Task 1a & 1d) */}
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {/* Render the list of products (Step 6) */}
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Buttons (Task 2) */}
      <div className="flex items-center justify-center pa4">
        <Button 
          text="Previous" 
          handleClick={() => handlePagination(-1)} 
          disabled={offset === 0} // Task 2b
        />
        <Button 
          text="Next" 
          handleClick={() => handlePagination(1)} 
          disabled={offset + limit >= data.length} // Task 2b
        />
      </div>
    </div>
  );
};

export default CardList;