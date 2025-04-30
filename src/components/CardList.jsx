import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  const filterTags = (term) => {
    const filtered = data.filter(product =>
      product.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredData(filtered);
    setOffset(0);
  };

  const handlePageChange = (direction) => {
    const newOffset = offset + direction * limit;
    if (newOffset >= 0 && newOffset < filteredData.length) {
      setOffset(newOffset);
    }
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePageChange(-1)} disabled={offset === 0} />
        <Button text="Next" handleClick={() => handlePageChange(1)} disabled={offset + limit >= filteredData.length} />
      </div>
    </div>
  );
};

export default CardList;
