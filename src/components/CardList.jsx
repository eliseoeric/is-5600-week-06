import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;

  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  // Pagination
  const handlePage = (direction) => {
    if (direction === 'next' && offset + limit < filteredData.length) {
      setOffset(offset + limit);
    }

    if (direction === 'prev' && offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  // Tag search filter
  const filterTags = (value) => {
    const search = value.toLowerCase();

    if (search === '') {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(search)
      )
    );

    setFilteredData(filtered);
    setOffset(0);
  };

  return (
    <div className="cf pa2">

      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePage('prev')} />
        <Button text="Next" handleClick={() => handlePage('next')} />
      </div>

    </div>
  );
};

export default CardList;