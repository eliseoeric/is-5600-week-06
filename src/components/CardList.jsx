import React, { useState } from "react";
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  // Pagination state
  const limit = 10;
  const [offset, setOffset] = useState(0);

  // Product state
  const [products, setProducts] = useState(data);

  // Filter products by tags
  const filterTags = (searchTerm) => {
    const filteredProducts = data.filter((product) =>
      product.tags.some((tag) =>
        tag.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setProducts(filteredProducts);
    setOffset(0); // Reset pagination to the first page
  };


  // Pagination functions
  const handlePrevious = () => setOffset(offset - limit);
  const handleNext = () => setOffset(offset + limit);

  // Get paginated products
  const getPaginatedProducts = () => {
    return products.slice(offset, offset + limit);
  };

  return (
    <div className="cf pa2">
      {/* Search Component */}
      <Search handleSearch={filterTags} />

      {/* Render Products */}
      <div className="mt2 mb2">
        {getPaginatedProducts().map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>
    </div>
  );
};

export default CardList;