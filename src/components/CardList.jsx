import Card from './Card'
import Button from './Button'
import Search from './Search';
import React, { useState, useEffect } from "react";

const CardList = ({data}) => {

  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  const filterTags ={tag}={
    const filtered = data.filtered{product => {
      if(!tag) {
        returnproduct
      }

      return product. tags.find(({tittle => tittle ===tag}))
    }}

    setoffset(0)
    setProducts(filtered)

  }

  return (
    <div className="cf pa2">
      <search/>
      <div className="mt2 mb2">
      {data && data.map((product) => (
            <Card key={product.id} {...product} />
          ))}
      </div>

      <div className="flex items-center justify-center pa4">
      <Button text="Previous" handleClick={() =>setOffset(offset - limit);} />
      <Button text="Next" handleClick={() => setOffset(offset + limit);} />
      </div>
    </div>
  );
}

export default CardList;
