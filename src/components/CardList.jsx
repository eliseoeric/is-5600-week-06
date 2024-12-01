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
    setSearchTerm(term); // Update the search term
    setOffset(0); // Reset pagination to the first page when search term changes
  };

  // Handle the 'Previous' button click for pagination
  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  // Handle the 'Next' button click for pagination
  const handleNext = () => {
    if (offset + limit < filteredProducts.length) {
      setOffset(offset + limit);
    }
  };

  // Calculate filtered products outside of useEffect to avoid dependency issues
  const filteredProducts = data.filter((product) => {
    return product.tags.some((tag) =>
      tag.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Update displayed products based on changes to offset, data, or searchTerm
  useEffect(() => {
    const currentProducts = searchTerm ? filteredProducts : data; // Use filtered products if search term exists, otherwise show all products
    setProducts(currentProducts.slice(offset, offset + limit)); // Set products based on offset and limit
  }, [offset, searchTerm, data]); // Re-run effect when offset, searchTerm, or data changes

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
          disabled={offset + limit >= filteredProducts.length} // Disable Next if there are no more filtered products
        />
      </div>
    </div>
  );
};

export default CardList;
