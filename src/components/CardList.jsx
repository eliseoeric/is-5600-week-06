import React, { useState, useEffect } from "react";
import Card from './Card';
import Button from './Button';
import Search from './Search';

const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  useEffect(() => {
    setProducts(filteredProducts.slice(offset, offset + limit));
  }, [offset, filteredProducts]);

  const filterTags = (term) => {
    setSearchTerm(term);
    setOffset(0);
    setFilteredProducts(
      data.filter((product) =>
        product.tags.some((tag) => tag.toLowerCase().includes(term.toLowerCase()))
      )
    );
  };

  const handlePagination = (direction) => {
    const newOffset = direction === "next" ? offset + limit : offset - limit;
    if (newOffset >= 0 && newOffset < filteredProducts.length) {
      setOffset(newOffset);
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
        <Button text="Previous" handleClick={() => handlePagination("prev")} disabled={offset === 0} />
        <Button text="Next" handleClick={() => handlePagination("next")} disabled={offset + limit >= filteredProducts.length} />
      </div>
    </div>
  );
};

export default CardList;
