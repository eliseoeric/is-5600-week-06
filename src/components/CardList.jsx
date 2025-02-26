
  import React, { useState, useEffect } from "react";
  import Card from "./Card";
  import Button from "./Button";
  import Search from "./Search";
  
  const CardList = ({ data }) => {
    const limit = 10;
    const [offset, setOffset] = useState(0);
    const [products, setProducts] = useState(data.slice(0, limit));
  
    useEffect(() => {
      setProducts(data.slice(offset, offset + limit));
    }, [offset, data]);
  
    const handlePrevious = () => {
      setOffset((prevOffset) => Math.max(prevOffset - 10, 0));
    };
  
    const handleNext = () => {
      if (offset + limit < data.length) {
        setOffset((prevOffset) => prevOffset + 10);
      }
    };
  
    const filterTags = (tagQuery) => {
      const filtered = data.filter((product) =>
        tagQuery ? product.tags.some(({ title }) => title === tagQuery) : true
      );
  
      setOffset(0);
      setProducts(filtered.slice(0, limit));
    };
  
    return (
      <div className="cf pa2">
        <Search handleSearch={filterTags} />
        <div className="mt2 mb2">
          {/* Using the data prop, we map over the list of products and render a Card component for each product */}
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
  
        {/* Pagination Buttons */}
        <div className="flex items-center justify-center pa4">
          <Button text="Previous" handleClick={handlePrevious} disabled={offset === 0} />
          <Button text="Next" handleClick={handleNext} disabled={offset + limit >= data.length} />
        </div>
      </div>
    );
  };
  
  export default CardList;