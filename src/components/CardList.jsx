
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  // Store filtered products
  const [filteredData, setFilteredData] = useState(data);

  // Pagination state
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  // Filter products using their tags
  const filterTags = (searchTerm) => {
    const term = searchTerm.trim().toLowerCase();

    const filtered = term === ""
      ? data
      : data.filter((product) =>
          Array.isArray(product.tags) &&
          product.tags.some((tag) =>
            typeof tag === "string"
              ? tag.toLowerCase().includes(term)
              : tag.title?.toLowerCase().includes(term)
          )
        );

    setFilteredData(filtered);
    setOffset(0);
  };

  // Update displayed products whenever pagination or filtering changes
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  // Handle both Previous and Next buttons
  const handlePage = (direction) => {
    setOffset((currentOffset) => {
      if (direction === "next") {
        return Math.min(
          currentOffset + limit,
          Math.max(0, filteredData.length - limit)
        );
      }

      return Math.max(0, currentOffset - limit);
    });
  };

  const isPreviousDisabled = offset === 0;
  const isNextDisabled = offset + limit >= filteredData.length;

  return (
    <div className="cf pa2">

      {/* Search component */}
      <Search handleSearch={filterTags} />

      {/* Product cards */}
      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        ) : (
          <p className="tc pa3">
            No products found for this tag.
          </p>
        )}
      </div>

      {/* Pagination buttons */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePage("previous")}
          disabled={isPreviousDisabled}
        />

        <Button
          text="Next"
          handleClick={() => handlePage("next")}
          disabled={isNextDisabled}
        />
      </div>

    </div>
  );
};

export default CardList;
