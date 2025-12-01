import Card from './Card'
import Search from './Search'
import Button from './Button'
import React, { useState, useEffect } from "react";

const CardList = ({ data }) => {

  const limit = 10;

  // fullData = either full list OR filtered list
  const [fullData, setFullData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);

  // Run every time offset or fullData changes
  useEffect(() => {
    setProducts(fullData.slice(offset, offset + limit));
  }, [offset, fullData]);

  // Filter by tags OR title
  const filterTags = (query) => {
    if (!query) {
      // Reset to full data
      setFullData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter(product =>
      product.tags.some(tag =>
        tag.title.toLowerCase().includes(query.toLowerCase())
      )
    );

    setOffset(0);
    setFullData(filtered);
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button 
          text="Previous" 
          handleClick={() => setOffset(offset - limit)} 
          disabled={offset === 0}
        />
        <Button 
          text="Next" 
          handleClick={() => setOffset(offset + limit)} 
          disabled={offset + limit >= fullData.length}
        />
      </div>
    </div>
  );
};

export default CardList;
