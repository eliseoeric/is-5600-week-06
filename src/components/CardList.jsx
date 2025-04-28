import React, { useState } from "react";

import Card from './Card';
import Search from "./Search";
import Button from './Button';

const CardList = ({ data }) => {

  const limit = 10;

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data);

  const handlePrevious = () => {
    setOffset(offset - 10);
  }

  const handleNext = () => {
    setOffset(offset + 10);
  }

  const getPaginatedProducts = () => {
    return products.slice(offset, offset + limit);
  }

  const filterTags = (tag) => {
    const filtered = data.filter(product => {
      if (!tag) {
        return product
      }

      return product.tags.find(({ title }) => title === tag)
    })

    setOffset(0);
    setProducts(filtered);

  }

  return (
    <div className="cf pa2">

      <Search handleSearch={filterTags} />


      <div className="mt2 mb2">
        {getPaginatedProducts().map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>

    </div>
  );
}

export default CardList;