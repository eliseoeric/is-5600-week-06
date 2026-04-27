import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  // update visible products
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  // pagination
  const handlePagination = (type) => {
    if (type === "next") {
      if (offset + limit < filteredData.length) {
        setOffset(offset + limit);
      }
    } else {
      if (offset - limit >= 0) {
        setOffset(offset - limit);
      }
    }
  };

  // search filter (tags + title)
  const filterTags = (value) => {
    // ✅ reset when empty
    if (!value) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(value.toLowerCase())
      ) ||
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered);
    setOffset(0);
  };

  return (
    <div className="cf pa2">
      {/* SEARCH */}
      <Search handleSearch={filterTags} />

      {/* PRODUCTS */}
      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        ) : (
          <p className="tc">No results found</p>
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePagination("prev")}
        />

        <Button
          text="Next"
          handleClick={() => handlePagination("next")}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList;