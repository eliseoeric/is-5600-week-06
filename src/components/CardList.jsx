import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";
import data from "../data.json"; // ensure your path is correct

const CardList = () => {
  const limit = 10; // 10 per page
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  // Update visible products when offset or filtered list changes
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  // Tag filtering function
  const filterTags = (searchTerm) => {
    const filtered = data.filter((product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredData(filtered);
    setOffset(0); // reset to first page after search
  };

  // Pagination control
  const handlePageChange = (direction) => {
    if (direction === "next" && offset + limit < filteredData.length) {
      setOffset(offset + limit);
    }
    if (direction === "previous" && offset > 0) {
      setOffset(offset - limit);
    }
  };

  return (
    <div className="pa3">
      {/* Search Component */}
      <Search handleSearch={filterTags} />

      {/* Display Cards */}
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange("previous")}
        />
        <Button
          text="Next"
          handleClick={() => handlePageChange("next")}
        />
      </div>
    </div>
  );
};

export default CardList;
