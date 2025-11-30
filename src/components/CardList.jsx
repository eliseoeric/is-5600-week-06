import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const limit = 10; // how many cards per page

const CardList = ({ data }) => {
  // full list that we are currently working with (after filtering)
  const [filteredData, setFilteredData] = useState(data);

  // pagination state
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(filteredData.slice(0, limit));

  // whenever filteredData or offset changes, update the visible products
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [filteredData, offset]);

  // handle page change: direction = 'next' or 'prev'
  const handlePageChange = (direction) => {
    if (direction === 'next') {
      if (offset + limit < filteredData.length) {
        setOffset(offset + limit);
      }
    } else if (direction === 'prev') {
      if (offset - limit >= 0) {
        setOffset(offset - limit);
      }
    }
  };

  // filter by tag text from the search box
  const filterTags = (searchTerm) => {
    const value = searchTerm.trim().toLowerCase();

    // if search is empty, show all products
    if (!value) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) =>
      Array.isArray(product.tags) &&
      product.tags.some(
        (tag) =>
          tag.title &&
          tag.title.toLowerCase().includes(value)
      )
    );

    setFilteredData(filtered);
    setOffset(0); // reset to first page of filtered results
  };

  const canGoPrevious = offset > 0;
  const canGoNext = offset + limit < filteredData.length;

  return (
    <div className="cf pa2">
      {/* search box above the cards */}
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}

        {products.length === 0 && (
          <p className="tc pa4">No products match that tag.</p>
        )}
      </div>

      {/* pagination buttons */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange('prev')}
          disabled={!canGoPrevious}
        />
        <Button
          text="Next"
          handleClick={() => handlePageChange('next')}
          disabled={!canGoNext}
        />
      </div>
    </div>
  );
};

export default CardList;
