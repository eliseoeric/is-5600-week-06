import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const paginate = (direction) => {
    const newOffset = offset + direction * limit;

    if (newOffset < 0 || newOffset >= filteredData.length) return;

    setOffset(newOffset);
  };

  const filterTags = (value) => {
    setSearchTerm(value.toLowerCase());

    const filtered = data.filter((product) =>
      product.tags.some((tag) => tag.title.toLowerCase().includes(value.toLowerCase()))
    );

    setFilteredData(filtered);
    setOffset(0);
    setProducts(filtered.slice(0, limit));
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">

      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.length === 0 && (
          <p className="tc red">No products found for "{searchTerm}"</p>
        )}

        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => paginate(-1)} />
        <Button
          text="Next"
          handleClick={() => paginate(1)}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList;
