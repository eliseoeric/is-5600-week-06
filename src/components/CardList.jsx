import Card from './Card';
import Button from './Button';
import Search from './Search';
import React, { useState, useEffect } from "react";

const CardList = ({ data }) => {
  const limit = 10; 
  const [offset, setOffset] = useState(0); 
  const [products, setProducts] = useState(data.slice(0, limit)); 
  const [tagQuery, setTagQuery] = useState('');

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, data]); 

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

  const filterTags = (query) => {
    setTagQuery(query);
    setOffset(0);

    const filtered = data.filter(product => {
      return query ? product.tags.some(({ title }) => title.toLowerCase() === query.toLowerCase()) : true;
    });

    setProducts(filtered); 
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
    {products && products.map((product) => {
        return (
          <Card key={product.id} {...product} />
        )
      })}
    </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={handlePrevious}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={handleNext}
          disabled={offset + limit >= data.length} 
        />
      </div>
    </div>
  );
};

export default CardList;