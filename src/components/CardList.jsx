import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search"; // Import the Search component

const CardList = ({ data }) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  
  // State variables
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const [filteredData, setFilteredData] = useState(data); // Store filtered data
  
  // Filter products by tags
  const filterTags = (searchTerm) => {
    if (!searchTerm) {
      // If search is empty, reset to original data
      setFilteredData(data);
    } else {
      // Filter products by tags that include the search term
      const filtered = data.filter(product => 
        product.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
    
    // Reset pagination when filtering
    setOffset(0);
  };
  
  // Combined pagination handler that takes a direction parameter
  const handlePagination = (direction) => {
    if (direction === 'prev') {
      // Don't go below 0
      setOffset(Math.max(0, offset - limit));
    } else if (direction === 'next') {
      // Don't go beyond available data
      setOffset(offset + limit);
    }
  };
  
  // Calculate if we're at the first or last page
  const isFirstPage = offset === 0;
  const isLastPage = offset + limit >= filteredData.length;
  
  // Update products when offset, limit, or filteredData changes
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, limit, filteredData]);
  
  return (
    <div className="cf pa2">
      {/* Search component for filtering by tags */}
      <div className="mb3">
        <Search handleSearch={filterTags} />
      </div>
      
      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        ) : (
          <p className="tc pa3">No products match your search criteria.</p>
        )}
      </div>
      
      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">   
        <Button 
          text="Previous" 
          handleClick={() => handlePagination('prev')} 
          disabled={isFirstPage} // Disable when at first page
        />
        <Button 
          text="Next" 
          handleClick={() => handlePagination('next')} 
          disabled={isLastPage} // Disable when at last page
        />
      </div>
    </div>
  );
};

export default CardList;