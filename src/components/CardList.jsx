import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({data}) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const [filteredData, setFilteredData] = useState(data);

  const filterTags = (tagQuery) => {
    if(!tagQuery) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter(product => 
      product.tags.some(tag => 
        tag.toLowerCase().includes(tagQuery.toLowerCase())
      )
    );

    setFilteredData(filtered);
    setOffset(0);
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData, limit]);

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
          handleClick={() => {
            if (offset >= 10) {
              setOffset(offset - 10);
            }
          }}
          disabled={offset === 0}
        />
        <Button 
          text="Next" 
          handleClick={() => {
            if (offset + limit < filteredData.length) {
              setOffset(offset + 10);
            }
          }}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList;