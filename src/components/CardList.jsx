import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 25;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const [filteredData, setFilteredData] = useState(data);

  const handlePrevious = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };

  const handleNext = () => {
    if (offset + limit < filteredData.length) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, limit, filteredData]);

  const filterTags = (tagQuery) => {
    const filtered = data.filter((product) =>
      tagQuery
        ? product.tags.some(({ title }) =>
            title.toLowerCase().includes(tagQuery.toLowerCase())
          )
        : true
    );
    setFilteredData(filtered);
    setOffset(0); // Reset pagination when filtering
  };

  return (
    <div className="cf pa2">
      <Search onFilter={filterTags} />
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
