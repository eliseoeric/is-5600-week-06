const CardList = () => {
  return ();
}
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

export default CardList;
const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data); // tracks filtered source
  const [products, setProducts] = useState(data.slice(0, limit));

  const filterTags = (searchTerm) => {
    const filtered = searchTerm
      ? data.filter((product) =>
          product.tags &&
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : data;
    setFilteredData(filtered);
    setOffset(0);
  };

  const handlePage = (direction) => {
    setOffset((prev) => prev + direction * limit);
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePage(-1)} disabled={offset === 0} />
        <Button text="Next" handleClick={() => handlePage(1)} disabled={offset + limit >= filteredData.length} />
      </div>
    </div>
  );
};

export default CardList;