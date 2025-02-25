// CardsList.jsx
import Card from "./Card";
import Button from "./Button";
import React, { useState, useEffect } from "react";
import Search from "./Search";

const limit = 10;
const CardList = ({data}) => {

  const defaultDataset = data.slice(0, limit);

  // Define the offset state variable and set it to 0
  const [offset, setOffset] = useState(0);
  // Define the products state variable and set it to the default dataset
  const [products, setProducts] = useState(defaultDataset);
  const [filteredData, setFilteredData] = useState(data);

  const filterTags = (searchTerm) => {
    const filtered = data.filter((product) =>
      Array.isArray(product.tags) &&
      product.tags.some((tag) => 
        typeof tag.title === "string" && tag.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  
    setFilteredData(filtered);
    setOffset(0); // Reset pagination when filtering
    setProducts(filtered.slice(0, limit)); // Show first batch of filtered results
  };
  // Define the handlePrevious function
  const handlePrevious = () => {
    // set the offset to the previous 10 products
    setOffset(offset - 10);
  }

  // Define the handleNext function
  const handleNext = () => {
    // set the offset to the next 10 products
    setOffset(offset + 10);
  }

  const handlePagination = (direction) => {
    const newOffset = offset + direction * limit;

    // Ensure offset stays within bounds
    if (newOffset >= 0 && newOffset < filteredData.length) {
      setOffset(newOffset);
    }
  };

  // Define the useEffect hook
  // This hook will run every time the offset or limit state variables change
  // It will update the products state variable to the next 10 products
  useEffect(() => {
    // set the products state variable to the next 10 products
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);
  return (
    <div className="cf pa2">
      {/* Search Component */}
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        {/* Disable Previous Button when at start */}
        <Button text="Previous" handleClick={() => handlePagination(-1)} disabled={offset === 0} />
        <Button text="Next" handleClick={() => handlePagination(1)} disabled={offset + limit >= filteredData.length} />
      </div>
    </div>
  )
}

export default CardList;