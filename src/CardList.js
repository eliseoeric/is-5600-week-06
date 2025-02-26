// Importing required dependencies and components
import React, { useState, useEffect } from "react";
import Card from "./Card";  // Component to display individual product details
import Button from "./Button";  // Reusable button component
import Search from "./Search";  // Search component for filtering products

// CardList component that displays a paginated list of products
const CardList = ({ data }) => {
  const limit = 10;  // Number of products displayed per page
  const defaultDataset = data.slice(0, limit);  // Initial dataset

  // State variables for pagination and product display
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  // Handles pagination: moves to the previous set of products
  const handlePrevious = () => {
    setOffset(offset - 10);
  };

  // Handles pagination: moves to the next set of products
  const handleNext = () => {
    setOffset(offset + 10);
  };

  // Updates the displayed products whenever the offset changes
  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  // Filters products based on selected tag
  const filterTags = (tagQuery) => {
    const filtered = data.filter((product) => {
      if (!tagQuery) {
        return product;  // Return all products if no tag query is provided
      }
      return product.tags.find(({ title }) => title === tagQuery);
    });

    setOffset(0);  // Reset pagination when filtering
    setProducts(filtered.slice(0, limit));  // Update displayed products
  };

  return (
    <div className="cf pa2">
      {/* Search bar for filtering products */}
      <Search handleSearch={filterTags} />

      {/* Displaying product cards */}
      <div className="mt2 mb2">
        {products && products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>
    </div>
  );
};

export default CardList;  // Exporting CardList component as the default export
