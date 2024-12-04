const CardList = () => {
  return ();
import React, { useState } from "react";  // Importing React and useState hook

// Importing components
import Card from './Card';
import Search from './Search';
import Button from './Button';

// Component to display a paginated list of cards
const CardList = ({ data }) => {

  const limit = 10;  // Limit of products per page
  const [offset, setOffset] = useState(0);  // State to manage current offset (starting index for pagination)
  const [products, setProducts] = useState(data);  // State to manage the list of products

  // Function to handle the 'Previous' button click
  const handlePrevious = () => {
    setOffset(offset - 10);  // Decrease the offset by 10 to go to the previous page
  }

  // Function to handle the 'Next' button click
  const handleNext = () => {
    setOffset(offset + 10);  // Increase the offset by 10 to go to the next page
  }

  // Function to get the products for the current page (based on the offset)
  const getPaginatedProducts = () => {
    return products.slice(offset, offset + limit);  // Slice the product list to only show 10 items per page
  }

  // Function to filter products based on tags
  const filterTags = (tag) => {
    const filtered = data.filter(product => {
      if (!tag) {
        return product;  // If no tag is provided, return all products
      }
      // Check if the product has a tag that matches the provided tag
      return product.tags.find(({ title }) => title === tag);
    });
    setOffset(0);  // Reset pagination to the first page after filtering
    setProducts(filtered);  // Update the product list with the filtered items
  }

  // JSX returned by the component
  return (
    <div className="cf pa2">  {/* Container with padding and other classes */}

      <Search handleSearch={filterTags} />  {/* Search component to filter products */}

      <div className="mt2 mb2">  {/* Wrapper for the list of cards */}
        {getPaginatedProducts().map((product) => (
          <Card key={product.id} {...product} />  // Render each product as a Card
        ))}
      </div>

      <div className="flex items-center justify-center pa4">  {/* Pagination buttons */}
        <Button text="Previous" handleClick={handlePrevious} />  {/* Button for previous page */}
        <Button text="Next" handleClick={handleNext} />  {/* Button for next page */}
      </div>

    </div>
  )
}

export default CardList;
export default CardList;  // Exporting the CardList component as default