import React, { useState, useEffect } from "react";
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;

  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  // Update products when offset or data changes
  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, data]);

  // Filter products by tag
  const filterTags = (tagQuery) => {
    const filtered = data.filter(product => {
      if (!tagQuery) {
        return true; // No filter applied, return all products
      }

      return product.tags.some(({ title }) => title.toLowerCase().includes(tagQuery.toLowerCase()));
    });

    setOffset(0); // Reset pagination to first page
    setProducts(filtered.slice(0, limit)); // Reset products based on the filtered set
  };

  // Pagination functions
  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(offset - limit); // Move to previous page
    }
  };

  const handleNext = () => {
    if (offset + limit < products.length) {
      setOffset(offset + limit); // Move to next page
    }
  };

  return (
    <div className="cf pa2">
      {/* Search Component */}
      <Search handleSearch={filterTags} />

      {/* Render Products */}
      <div className="mt2 mb2">
        {products && products.map((product) => (
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
