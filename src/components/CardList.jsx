import React, { useEffect, useState } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;

  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [filteredData, offset]);

  const filterTags = (searchTerm) => {
    const filteredProducts = data.filter((product) =>
      product.tags.some((tag) => tag.title === searchTerm)
    );

    setFilteredData(filteredProducts);
    setOffset(0);
  };

  const handlePagination = (direction) => {
    if (direction === 'previous') {
      setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
    }

    if (direction === 'next') {
      setOffset((prevOffset) =>
        prevOffset + limit >= filteredData.length ? prevOffset : prevOffset + limit
      );
    }
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={(e) => {
            e.preventDefault();
            handlePagination('previous');
          }}
        />
        <Button
          text="Next"
          disabled={offset + limit >= filteredData.length}
          handleClick={(e) => {
            e.preventDefault();
            handlePagination('next');
          }}
        />
      </div>
    </div>
  );
};

export default CardList;