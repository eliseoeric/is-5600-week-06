import React, { useState, useEffect } from "react";
import Card from './Card';
import Button from './Button';
import Search from './Search';

const limit = 10;

const CardList = ({data}) => {
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  const handlePage = (direction) => {
  setOffset(offset + direction);
}

const filterTags = (searchTerm) => {
  const filtered = data.filter((product) => 
    product.tags && product.tags.some((tag) => 
      tag.title.toLowerCase().includes(searchTerm)
    )
  );
  setOffset(0);
  setProducts(filtered);
}

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        <Search handleSearch={filterTags} />
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePage(-10)} />
        <Button text="Next" handleClick={() => handlePage(10)} disabled={offset + limit >= data.length} />
      </div>
    </div>
  );
}

export default CardList;