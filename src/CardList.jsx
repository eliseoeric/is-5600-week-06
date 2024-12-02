import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = searchTerm
    ? data.filter((product) =>
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : data;

  const updateProducts = () => {
    setProducts(filteredData.slice(offset, offset + limit));
  };

  useEffect(() => {
    updateProducts();
  }, [offset, filteredData]);

  const handlePagination = (direction) => {
    setOffset((prevOffset) =>
      direction === 'next'
        ? Math.min(prevOffset + limit, filteredData.length - limit)
        : Math.max(prevOffset - limit, 0)
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setOffset(0);
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={handleSearch} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePagination('previous')}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => handlePagination('next')}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList;
