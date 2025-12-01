const CardList = () => {
  return ();
}

export default CardList;
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const limit = 10;

const CardList = ({data}) => {
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  const handlePagination = (direction) => {
    if (direction === 'next') {
      setOffset(offset + limit);
    } else if (direction === 'previous') {
      setOffset(offset - limit);
    }
  };

  const filterTags = (searchTerm) => {
    const filtered = data.filter(product => 
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setProducts(filtered.slice(0, limit));
    setOffset(0);
  };

useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  const isNextDisabled = offset + limit >= data.length;

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePagination('previous')} />
        <Button text="Next" handleClick={() => handlePagination('next')} disabled={isNextDisabled} />
      </div>
    </div>
  );
};

export default CardList;