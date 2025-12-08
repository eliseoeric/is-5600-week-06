import Card from './Card'
import Button from './Button'
import Search from './Search'
import React, { useState, useEffect } from "react";

const CardList = ({ data }) => {

  const limit = 10;

  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);

  const filtertags = (tagQuery) => {
    let filtered;

    if (!tagQuery) {
      filtered = data;
    } else {
      filtered = data.filter(product =>
        product.tags.find(tag => tag.title === tagQuery)
      );
    }

    setOffset(0);
    setFilteredData(filtered);
  }

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  const handlePrevious = () => {
    if (offset > 0) setOffset(offset - limit);
  }

  const handleNext = () => {
    if (offset + limit < filteredData.length) setOffset(offset + limit);
  }

  return (
    <div className="cf pa2">

      {/* 🔥 FIX APPLIED HERE — matches Search.js prop */}
      <Search handleSearch={filtertags} />

      <div className="mt2 mb2">
        {products.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={handlePrevious} disabled={offset === 0}/>
        <Button text="Next" handleClick={handleNext} disabled={offset + limit >= filteredData.length}/>
      </div>
    </div>
  )
}

export default CardList;
