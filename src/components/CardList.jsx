import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const [filteredData, setFilteredData] = useState(data);

  // Pagination handler that accepts a direction parameter
  const handlePagination = (direction) => {
    if (direction === 'next') {
      setOffset(offset + limit);
    } else if (direction === 'previous' && offset > 0) {
      setOffset(offset - limit);
    }
  };

  // Filter products by tags
  const filterTags = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(data);
      setOffset(0);
    } else {
      const filtered = data.filter((product) =>
        product.tags.some((tag) =>
          tag.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
      setOffset(0);
    }
  };

  // Update products when offset or filteredData changes
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  // Determine if Next button should be disabled
  const isNextDisabled = offset + limit >= filteredData.length;
  const isPreviousDisabled = offset === 0;

  return (
    <div className="cf pa2">
      {/* Search Component */}
      <Search handleSearch={filterTags} />

      {/* Products Grid */}
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePagination('previous')}
          disabled={isPreviousDisabled}
        />
        <Button
          text="Next"
          handleClick={() => handlePagination('next')}
          disabled={isNextDisabled}
        />
      </div>
    </div>
  );
};

export default CardList;