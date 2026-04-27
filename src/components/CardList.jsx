import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, limit, filteredData]);

  const handlePage = (direction) => {
    setOffset((prev) => prev + direction);
  };

  const filterTags = (searchTerm) => {
    const filtered = searchTerm
      ? data.filter((product) =>
          product.tags && product.tags.some((tag) => tag.title.toLowerCase().includes(searchTerm))
        )
      : data;
    setFilteredData(filtered);
    setOffset(0);
  };

  const atStart = offset === 0;
  const atEnd = offset + limit >= filteredData.length;

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePage(-limit)} disabled={atStart} />
        <Button text="Next" handleClick={() => handlePage(limit)} disabled={atEnd} />
      </div>
    </div>
  );
};

export default CardList;
