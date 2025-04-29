// src/components/CardList.jsx
import React, { useEffect, useState } from 'react';
import Search from './Search';
import Card from './Card';
import Button from './Button';

const PRODUCTS_PER_PAGE = 6;

const CardList = ({ data }) => {
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [products, setProducts] = useState(data.slice(0, PRODUCTS_PER_PAGE));
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setProducts(filteredProducts.slice(offset, offset + PRODUCTS_PER_PAGE));
  }, [filteredProducts, offset]);

  const filterTags = (searchTerm) => {
    const filtered = data.filter((product) =>
      product.tags.some((tag) =>
        tag.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredProducts(filtered);
    setOffset(0);  // Reset offset when filtering
  };

  const handlePageChange = (direction) => {
    const newOffset = offset + direction * PRODUCTS_PER_PAGE;
    if (newOffset >= 0 && newOffset <= filteredProducts.length - PRODUCTS_PER_PAGE) {
      setOffset(newOffset);
    }
  };

  return (
    <div>
      <Search handleSearch={filterTags} />
      <div className="card-list">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <Button text="Previous" handleClick={() => handlePageChange(-1)} disabled={offset === 0} />
        <Button
          text="Next"
          handleClick={() => handlePageChange(1)}
          disabled={offset + PRODUCTS_PER_PAGE >= filteredProducts.length}
        />
      </div>
    </div>
  );
};

export default CardList;
