// CardList.jsx
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);

  const [products, setProducts] = useState(data.slice(0, limit));

  const [searchTerm, setSearchTerm] = useState("");

  const filterTags = (term) => {
    setSearchTerm(term);
    setOffset(0); 
  };

  useEffect(() => {
    let filtered = data;

    if (searchTerm) {
      filtered = data.filter((product) =>
        product.tags &&
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setProducts(filtered.slice(offset, offset + limit));
  }, [offset, searchTerm, data]);

  const changePage = (direction) => {
    if (direction === "next") {
      if (offset + limit < data.length) setOffset(offset + limit);
    } else if (direction === "prev") {
      if (offset > 0) setOffset(offset - limit);
    }
  };

  const isAtEnd = offset + limit >= data.length;

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
          handleClick={() => changePage("prev")}
        />
        <Button
          text="Next"
          handleClick={() => changePage("next")}
          disabled={isAtEnd}
        />
      </div>
    </div>
  );
};

export default CardList;