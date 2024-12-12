import Card from './Card'
import Button from './Button'
import React, { useState, useEffect } from "react";

const CardList = ({data}) => {

  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const handlePrevious = () => {
    setOffset(offset - 10);
  }
  const handleNext = () => {
    setOffset(offset + 10);
  
    useEffect(() => {
      setProducts(data.slice(offset, offset + limit));
    }, [offset, limit, data]);

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        {products && products.map((product) =>(
    
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
    </div>
  )
}

export default CardList;