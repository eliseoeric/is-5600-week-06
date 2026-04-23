import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;

  const [products, setProducts] = useState(data);
  const [offset, setOffset] = useState(0);

  const filterTags = (searchTerm) => {
    const filteredTags = data.filter((product) => {
      if (!product.tags) return false;

      return product.tags.some((tag) =>
        tag.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setOffset(0);
    setProducts(filteredTags);
  };

  const handlePagination = (value) => {
    const newOffset = offset + value;

    if (newOffset >= 0 && newOffset < products.length) {
      setOffset(newOffset);
    }
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.slice(offset, offset + limit).map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePagination(-limit)}
          disabled={offset === 0}
        />

        <Button
          text="Next"
          handleClick={() => handlePagination(limit)}
          disabled={offset + limit >= products.length}
        />
      </div>
    </div>
  );
};

export default CardList;