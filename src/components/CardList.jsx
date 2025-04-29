import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  const handlePrevious = () => {
    if (offset >= 10) {
      setOffset(offset - 10);
    }
  };

  const handleNext = () => {
    if (offset + 10 < data.length) {
      setOffset(offset + 10);
    }
  };

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  if (data.length === 0) {
    return (
      <div className="tc pa5">
        <h2>No products found</h2>
        <p>Try a different search term</p>
      </div>
    );
  }

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      
      {data.length > limit && (
        <div className="flex items-center justify-center pa4">
          <Button 
            text="Previous" 
            onClick={handlePrevious} 
            disabled={offset === 0}
          />
          <Button 
            text="Next" 
            onClick={handleNext} 
            disabled={offset + 10 >= data.length}
          />
        </div>
      )}
    </div>
  );
};

export default CardList;