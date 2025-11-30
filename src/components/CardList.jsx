import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(filteredData.slice(0, limit));

  const changePage = (direction) => {
    const newOffset = offset + direction * limit;
    if (newOffset < 0) return;
    if (newOffset >= filteredData.length) return;
    setOffset(newOffset);
  };

  const filterTags = (searchTerm) => {
    const term = searchTerm.toLowerCase();

    const filtered = data.filter((product) =>
      product.tags.some((tag) => tag.toLowerCase().includes(term))
    );

    setFilteredData(filtered);
    setOffset(0);
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [filteredData, offset]);

  const atStart = offset === 0;
  const atEnd = offset + limit >= filteredData.length;

  return (
    <div className="cf pa2">
      <div className="mt3 mb3 tc">
        <Search handleSearch={filterTags} />
      </div>

      <div className="mt2 mb2">
        {products.map((p) => (
          <Card key={p.id} {...p} />
        ))}
        {products.length === 0 && (
          <p className="tc gray">No products found.</p>
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => changePage(-1)}
          disabled={atStart}
        />
        <Button
          text="Next"
          handleClick={() => changePage(1)}
          disabled={atEnd}
        />
      </div>
    </div>
  );
};

export default CardList;
