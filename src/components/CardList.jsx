import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  const handlePrevious = () => {
    setOffset(offset - 10);
  };

  const handleNext = () => {
    setOffset(offset + 10);
  };

  const filterTags = (searchTerm) => {
  const filtered = data.filter((product) =>
    product.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  setOffset(0);
  setProducts(filtered.slice(0, limit));
};

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

return (
  <div className="cf pa2">

    <Search handleSearch={filterTags} />

    <div className="mt2 mb2">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>

    <div className="flex items-center justify-center pa4">
      <Button text="Previous" handleClick={handlePrevious} />
      <Button text="Next" handleClick={handleNext} />
    </div>

  </div>
);
};

export default CardList;