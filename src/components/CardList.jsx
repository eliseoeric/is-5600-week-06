import React, { useState, useEffect } from "react";
import Card from "./Card"; // Ensure this path is correct
import Button from "./Button"; // Import the Button component
import Search from "./Search"; // Import the Search component

const CardList = ({ data }) => {
  // Define the limit and offset state variables for pagination
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit)); // Initially show the first 'limit' products
  const [searchTerm, setSearchTerm] = useState(""); // State for tracking the search term

  // Filter products based on the search term (tags)
  const filterTags = (term) => {
    const filteredProducts = data.filter((product) =>
      product.tags.some((tag) => tag.toLowerCase().includes(term.toLowerCase()))
    );
    setSearchTerm(term); // Update the search term
    setOffset(0); // Reset pagination to the first page when search term changes
    setProducts(filteredProducts.slice(0, limit)); // Set filtered products based on search
  };

  // Handle the 'Previous' button click for pagination
  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  // Handle the 'Next' button click for pagination
  const handleNext = () => {
    if (offset + limit < products.length) {
      setOffset(offset + limit);
    }
  };

  // Update displayed products based on changes to offset, data, or searchTerm
  useEffect(() => {
    // If searchTerm exists, apply the filtering
    if (searchTerm) {
      setProducts(
        data
          .filter((product) =>
            product.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
          .slice(offset, offset + limit)
      );
    } else {
      // If no search term, show all products
      setProducts(data.slice(offset, offset + limit));
    }
  }, [offset, data, searchTerm]); // Re-run effect when offset, data, or searchTerm changes

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        {/* Search Component to filter by tags */}
        <Search handleSearch={filterTags} />

        {/* Render the filtered products */}
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        {/* Previous Button */}
        <Button text="Previous" handleClick={handlePrevious} />
        
        {/* Next Button */}
        <Button
          text="Next"
          handleClick={handleNext}
          disabled={offset + limit >= products.length} // Disable Next if there are no more products
        />
      </div>
    </div>
  );
};

export default CardList;
