import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  const handlePageChange = (direction) => {
    setOffset((prev) => prev + direction * limit);
  };

  const filterTags = (searchTerm) => {
    if (!searchTerm) {
      setOffset(0);
      setProducts(data.slice(0, limit));
      return;
    }
    const filtered = data.filter((product) =>
      product.tags &&
      product.tags.some((tag) => {
        const tagValue = tag.title || tag;
        return tagValue.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
    setOffset(0);
    setProducts(filtered);
  };

  const isPrevDisabled = offset === 0;
  const isNextDisabled = offset + limit >= data.length;

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2 flex flex-wrap">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange(-1)}
          disabled={isPrevDisabled}
        />
        <Button
          text="Next"
          handleClick={() => handlePageChange(1)}
          disabled={isNextDisabled}
        />
      </div>
    </div>
  );
};

export default CardList;