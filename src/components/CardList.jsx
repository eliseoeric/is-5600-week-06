import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products by tags
  const filterTags = (term) => {
    const filteredData = data.filter((product) =>
      product.tags.some((tag) => tag.toLowerCase().includes(term.toLowerCase()))
    );
    setSearchTerm(term);
    setOffset(0);
    setProducts(filteredData.slice(0, limit));
  };

  // Pagination handler
  const handlePagination = (direction) => {
    const newOffset = offset + direction * limit;
    setOffset(newOffset);
  };

  useEffect(() => {
    const filteredData = searchTerm
      ? data.filter((product) =>
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : data;

    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, searchTerm, data]);

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePagination(-1)}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => handlePagination(1)}
          disabled={offset + limit >= data.length}
        />
      </div>
    </div>
  );
};

export default CardList;
