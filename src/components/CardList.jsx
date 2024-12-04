import Card from './Card'
import Button from './Button';
import Search from './Search';
import React, { useState, useEffect } from "react";
const CardList = ({data}) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const handlePrevious = () => {
    // set the offset to the previous 10 products
    if(offset > 0) {
    setOffset(offset - limit);
    }
  };
  
  // Define the handleNext function
  const handleNext = () => {
    // set the offset to the next 10 products
    if(offset + limit <data.length){
    setOffset(offset + limit);
    }
  };

  useEffect(() => {
    // set the products state variable to the next 10 products
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);
  const filterTags = (tagQuery) => {
    const filtered = data.filter((product) =>
      tagQuery
        ? product.tags.some(({ title }) => title.toLowerCase() === tagQuery.toLowerCase())
        : true
    );

    // Reset pagination and update the filtered products
    setOffset(0);
    setProducts(filtered.slice(0, limit));
  };


  return (
    <div className="cf pa2">
      <search handleSearch={filterTags} />
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
    
  )
}

export default CardList;