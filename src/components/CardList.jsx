import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    setProducts(currentData.slice(offset, offset + limit));
  }, [offset, limit, currentData]);

  const filterTags = (searchTerm) => {
    if (!searchTerm) {
      setCurrentData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter(product => {
      if (!product.tags) return false;
      return product.tags.find(tag => tag.title.toLowerCase().includes(searchTerm));
    });

    setCurrentData(filtered);
    setOffset(0);
  }

  const handlePagination = (direction) => {
    const newOffset = offset + direction;
    if (newOffset >= 0 && newOffset < currentData.length) {
      setOffset(newOffset);
    }
  }

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePagination(-limit)} disabled={offset === 0} />
        <Button text="Next" handleClick={() => handlePagination(limit)} disabled={offset + limit >= currentData.length} />
      </div>
    </div>
  )
}

export default CardList;