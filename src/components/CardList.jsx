import Card from "./Card";
import Button from "./Button";
import React, { useState, useEffect } from "react";
import Search from "./Search";


const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  const filterTags = (searchTerm) => {
    const filtered = data.filter((product) =>
      product.tags.some((tag) => tag.title.toLowerCase().includes(searchTerm))
  );

    setFilteredData(filtered);
    setOffset(0);
    setProducts(filtered.slice(0, limit));
  };

  const changePage = (direction) => {
    if (direction === "prev" && offset > 0) {
      setOffset(offset - limit);
    }

    if (direction === "next" && offset + limit < filteredData.length) {
      setOffset(offset + limit);
    }
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  const disableNext = offset + limit >= filteredData.length;

  return (
    <div className="cf pa2">

      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products &&
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => changePage("prev")} />
        <Button text="Next" handleClick={() => changePage("next")} disabled={disableNext} />
      </div>
    </div>
  );
};

export default CardList;
