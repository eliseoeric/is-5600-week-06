import React, { useState, useEffect } from "react";
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({data}) => {
  const limit = 10;
  const [filteredData, setFilteredData] = useState(data);
  const defaultDataset = filteredData.slice(0, limit);

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  const filterTags = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(product => 
        product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredData(filtered);
    }
    setOffset(0);
  };

  const handlePagination = (direction) => {
    if (direction === 'next' && offset + limit < filteredData.length) {
      setOffset(offset + 10);
    } else if (direction === 'previous' && offset > 0) {
      setOffset(offset - 10);
    }
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, limit, filteredData]);

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      </div>
      
      <div className="flex items-center justify-center pa4">   
        <Button text="Previous" handleClick={() => handlePagination('previous')} disabled={offset === 0} />
        <Button text="Next" handleClick={() => handlePagination('next')} disabled={offset + limit >= filteredData.length} />
      </div>
    </div>
  )
}

export default CardList;