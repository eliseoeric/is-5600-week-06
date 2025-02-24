
import React, { useState } from "react";  // Import React and the useState hook

// Importing custom components for displaying individual product cards, search functionality, and pagination buttons
import Card from './Card';
import Search from './Search';
import Button from './Button';

// Component for displaying a paginated list of product cards
const CardList = ({ data }) => {

  const limit = 10;  // Maximum number of products displayed per page
  const [offset, setOffset] = useState(0);  // State variable to track the starting index for the current page of products
  const [products, setProducts] = useState(data);  // State variable to hold the current list of products based on filters and pagination

  // Handler for the 'Previous' button click
  const handlePrevious = () => {
    // Decrease the offset to show the previous set of products, ensuring it does not go below 0
    setOffset(Math.max(offset - limit, 0));
  }

  // Handler for the 'Next' button click
  const handleNext = () => {
    // Increase the offset to show the next set of products in the list
    setOffset(offset + limit);
  }

  // Function to retrieve the products for the current page based on the current offset
  const getPaginatedProducts = () => {
    // Slice the products array to return only the items that should be displayed on the current page
    return products.slice(offset, offset + limit);
  }

  // Function to filter products based on a selected tag
  const filterTags = (tag) => {
    // Filter the original data array to include only products that match the provided tag
    const filtered = data.filter(product => {
      if (!tag) {
        return product;  // If no tag is provided, return all products
      }
      // Check if the product contains a tag that matches the specified tag
      return product.tags.some(({ title }) => title === tag);
    });
    setOffset(0);  // Reset pagination to the first page after filtering
    setProducts(filtered);  // Update the products state with the filtered results
  }

  // JSX structure returned by the component
  return (
    <div className="cf pa2">  {/* Main container with CSS classes for layout and padding */}

      <Search handleSearch={filterTags} />  {/* Search component for filtering products by tags */}

      <div className="mt2 mb2">  {/* Container for displaying product cards */}
        {getPaginatedProducts().map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">  {/* Flex container for pagination buttons */}
        <Button text="Previous" handleClick={handlePrevious} />  {/* Button to navigate to the previous page */}
        <Button text="Next" handleClick={handleNext} />  {/* Button to navigate to the next page */}
      </div>

    </div>
  );
}

export default CardList;  // Export the CardList component as the default export