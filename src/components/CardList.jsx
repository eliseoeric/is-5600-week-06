import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  const handleSearch = (searchTerm) => {
    const filteredProducts = data.filter((product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filteredProducts);
    setOffset(0);
  };

  const handlePagination = (direction) => {
    if (direction === "prev" && offset > 0) {
      setOffset(offset - limit);
    } else if (direction === "next" && offset + limit < filteredData.length) {
      setOffset(offset + limit);
    }
  };

  useEffect(() => {
    const paginatedProducts = filteredData.slice(offset, offset + limit);
    setProducts(paginatedProducts);
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">
      <Search handleSearch={handleSearch} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePagination("prev")}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => handlePagination("next")}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList; 
