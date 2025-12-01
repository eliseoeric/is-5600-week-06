// CardList.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const [filteredData, setFilteredData] = useState(data);

  // Filter by tags function
  const filterTags = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(data);
      setOffset(0);
      setProducts(data.slice(0, limit));
      return;
    }
    
    const filtered = data.filter((product) => 
      product.tags.some(tag => 
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    
    setFilteredData(filtered);
    setOffset(0);
    setProducts(filtered.slice(0, limit));
  }

  // Optimized pagination function
  const handlePagination = (direction) => {
    if (direction === 'next') {
      setOffset(offset + 10);
    } else if (direction === 'previous') {
      setOffset(offset - 10);
    }
  }

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, limit, filteredData]);

  // Check if we're at the end of the list
  const isAtEnd = offset + limit >= filteredData.length;
  const isAtStart = offset === 0;

  return (
    <div className="cf pa2">
      {/* Search Component */}
      <Search handleSearch={filterTags} />
      
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      
      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">   
        <Button 
          text="Previous" 
          handleClick={() => handlePagination('previous')}
          disabled={isAtStart}
        />
        <Button 
          text="Next" 
          handleClick={() => handlePagination('next')}
          disabled={isAtEnd}
        />
      </div>
    </div>
  );
}

export default CardList;