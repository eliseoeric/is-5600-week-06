import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 25;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  const handleChange = (direction) => {
    if (direction === "next" && offset + limit < data.length) {
      setOffset((prev) => prev + limit);
    } else if (direction === "prev" && offset > 0) {
      setOffset((prev) => Math.max(prev - limit, 0));
    }
  };

  const filterTags = (tagQuery) => {
    const filtered = data.filter((product) => {
      if (!tagQuery) {
        return products;
      }
      return product.tags.some(({ title }) => title === tagQuery);
    });
    setOffset(0);
    setProducts(filtered);
  };

  useEffect(() => {
    // When offset or data changes, update the products list
    setProducts(data.slice(offset, offset + limit));
  }, [offset, data]);

  const isPrevDisabled = offset === 0;
  const isNextDisabled = offset + limit >= data.length;

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        <Search handleSearch={filterTags} />
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handleChange("prev")}
          disabled={isPrevDisabled}
        />
        <Button
          text="Next"
          handleClick={() => handleChange("next")}
          disabled={isNextDisabled}
        />
      </div>
    </div>
  );
};

export default CardList;