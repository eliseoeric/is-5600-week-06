import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  // States
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [searchTerm, setSearchTerm] = useState("");

  // SEARCH BY DESCRIPTION (since no tags exist in your dataset)
  const filterTags = (value) => {
    setSearchTerm(value);

    const filtered = data.filter((product) =>
      (product.description || "")
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setOffset(0);
    setProducts(filtered.slice(0, limit));
  };

  // PAGINATION
  const paginate = (direction) => {
    const newOffset = offset + direction * limit;
    setOffset(newOffset);
  };

  // UPDATE products when offset or search changes
  useEffect(() => {
    const source = searchTerm
      ? data.filter((product) =>
          (product.description || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : data;

    setProducts(source.slice(offset, offset + limit));
  }, [offset, searchTerm, data]);

  return (
    <div className="cf pa2">
      {/* Search */}
      <Search handleSearch={filterTags} />

      {/* Cards */}
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => paginate(-1)}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => paginate(1)}
          disabled={offset + limit >= data.length}
        />
      </div>
    </div>
  );
};

export default CardList;
