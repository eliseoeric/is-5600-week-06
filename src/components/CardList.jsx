import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  const handlePageChange = (direction) => {
    const newOffset = offset + direction * limit;

    if (newOffset >= 0 && newOffset < filteredData.length) {
      setOffset(newOffset);
    }
  };

  const filterTags = (searchText) => {
    const value = searchText.toLowerCase().trim();

    if (!value) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) =>
      product.tags?.some((tag) => tag.toLowerCase().includes(value))
    );

    setFilteredData(filtered);
    setOffset(0);
  };

  const isPreviousDisabled = offset === 0;
  const isNextDisabled = offset + limit >= filteredData.length;

  return (
    <div className="cf pa2">
      <div className="mt2 mb3">
        <Search handleSearch={filterTags} />
      </div>

      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange(-1)}
          disabled={isPreviousDisabled}
        />
        <Button
          text="Next"
          handleClick={() => handlePageChange(1)}
          disabled={isNextDisabled}
        />
      </div>
    </div>
  );
};

export default CardList;