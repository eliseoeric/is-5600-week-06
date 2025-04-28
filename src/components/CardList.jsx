const CardList = () => {
  return ();
CardList.jsx


import Card from './Card'
import Button from './Button';
import React, { useState, useEffect } from "react";

const CardList = ({data}) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  const handlePrevious = () => {
    // set the offset to the previous 10 products
    setOffset(offset - 10);
  }

  const handleNext = () => {
    // set the offset to the next 10 products
    setOffset(offset + 10);
  }

  useEffect(() => {
    // set the products state variable to the next 10 products
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
      {data.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      </div>

      <div className="flex items-center justify-center pa4">   
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>
    </div>
  )
}

export default CardList; 
export default CardList;

