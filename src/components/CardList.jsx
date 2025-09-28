import React, { useState } from 'react';
import Search from "./Search";
import Card from './Card';
import Button from './Button';

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0)
  const [products, setProducts] = useState(data)
  const [filteredProducts, setFilteredProducts] = useState(data);
  const handlePrevious = () => {
    // set the offset to the previous 10 products
    setOffset(offset - 10);
  }
  const handleNext = () => {
    // set the offset to the next 10 products
    setOffset(offset + 10);
  }
  const getPaginatedProducts = () => {
    return filteredProducts.slice(offset, offset + limit);
  }
  const filterTags = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Filter products based on the title of each tag
    const filtered = data.filter((product) =>
      product.tags.some((tag) =>
        typeof tag.title === 'string' && tag.title.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );

    setFilteredProducts(filtered);
    setOffset(0); // Reset pagination offset when search is applied
  };

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
  )
}

export default CardList;