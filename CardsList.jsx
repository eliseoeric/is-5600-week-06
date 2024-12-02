import React, { useState, useEffect } from "react";
import Card from "./Card";  // Assuming you have a Card component for displaying each product
import Button from "./Button";  // Assuming you have a Button component for pagination

const CardList = ({ data }) => {
  const limit = 10;

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(offset - limit); // Decrease the offset by limit (10)
    }
  };

  const handleNext = () => {
    if (offset + limit < data.length) {
      setOffset(offset + limit); // Increase the offset by limit (10)
    }
  };

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  return (
    <div className="cf pa2">
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
