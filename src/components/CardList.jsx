import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 25;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  const handleNext = () => {
    if (offset + limit < data.length) {
      setOffset(offset + limit);
    }
  };

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, data]);

  const filterTags = (tag) => {
    const filtered = data.filter((product) =>
      product.tags.some(({ title }) => title === tag)
    );
    setOffset(0);
    setProducts(filtered.slice(0, limit));
  };

  return (
    <div className="cf pa2">
      <Search />
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
