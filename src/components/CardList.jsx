// CardsList.jsx
import Card from "./Card";
import Button from "./Button";
import React, { useState, useEffect } from "react";
import Search from "./Search";

const CardList = ({data}) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const [tagQuery, setTagQuery] = useState(""); 

  const handlePageChange = (direction) => {
    const newOffset = offset + direction * limit;
    setOffset(newOffset);
  };

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);


  const filterTags = (tagQuery) => {
    setTagQuery(tagQuery); 
    const filtered = data.filter((product) => {
      if (!tagQuery) {
        return product;
      }
      return product.tags.find(({ title }) => title === tagQuery);
    });

    setOffset(0); 
    setProducts(filtered.slice(0, limit)); 
  };

  
  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags}/>
      <div className="mt2 mb2">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      </div>
      <div className="flex items-center justify-center pa4">   
      <Button
          text="Previous"
          handleClick={() => handlePageChange(-1)}
          disabled={offset === 0} 
        />
        
        <Button
          text="Next"
          handleClick={() => handlePageChange(1)}
          disabled={offset + limit >= data.length} 
        />      </div>
      
    </div>
  )
}

export default CardList;