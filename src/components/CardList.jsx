import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data = [] }) => {
  const limit = 10;

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, data]);

  const handlePage = (direction) => {
    if (direction === "next" && offset + limit < data.length) {
      setOffset(offset + limit);
    }

    if (direction === "previous" && offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  const filterTags = (searchTerm) => {
    const term = searchTerm.toLowerCase();

    const filtered = data.filter((product) =>
      product.tags.some((tag) => tag.toLowerCase().includes(term))
    );

    setProducts(filtered.slice(0, limit));
    setOffset(0);
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
        <Button text="Previous" handleClick={() => handlePage("previous")} />
        <Button text="Next" handleClick={() => handlePage("next")} />
      </div>
    </div>
  );
};

export default CardList;
