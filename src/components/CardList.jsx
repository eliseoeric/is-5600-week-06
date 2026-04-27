// CardList.jsx
import React, { useState, useEffect } from "react";

// Define the limit constant
const limit = 10;

const CardList = ({ data }) => {
  // Define the offset state variable and set it to 0
  const [offset, setOffset] = useState(0);
  // Define the products state variable and set it to the first 10 products
  const [products, setProducts] = useState(data.slice(0, limit));

  // Define the handlePrevious function
  const handlePrevious = () => {
    // Prevent offset from going below 0
    setOffset(Math.max(0, offset - limit));
  };

  // Define the handleNext function
  const handleNext = () => {
    // Prevent offset from going beyond the dataset length
    if (offset + limit < data.length) {
      setOffset(offset + limit);
    }
  };

  // This hook will run every time the offset or data changes
  // It will update the products state variable to the correct slice of data
  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, data]);

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        {/* Map over the products state variable and render a Card component for each product */}
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        {/* Only show Previous button if we are not on the first page */}
        {offset > 0 && (
          <Button text="Previous" handleClick={handlePrevious} />
        )}
        {/* Only show Next button if there are more products to show */}
        {offset + limit < data.length && (
          <Button text="Next" handleClick={handleNext} />
        )}
      </div>
    </div>
  );
};

export default CardList;