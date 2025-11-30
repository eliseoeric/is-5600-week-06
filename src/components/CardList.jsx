import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
const CardList = ({ data }) => {
  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  const [filterdData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const [previousAndNext, setPreviousAndNext] = useState({
    previous: true,
    next: true,
  });
  const handlePageChange = (text) => {
    let diff = 0;
    if (text == "Previous") {
      diff -= limit;
      setOffset(offset + diff);
    } else {
      diff += limit;
      setOffset(offset + diff);
    }
  };

  const handleFilter = (tag) => {
    if (tag == "") {
      setFilteredData(data);
    } else {
      setFilteredData(() => {
        return data.filter((item) =>
          item.tags.some((tags) => tags.title == tag),
        );
      });
    }
    setOffset(0);
  };

  useEffect(() => {
    if (offset + limit >= filterdData?.length) {
      setPreviousAndNext((stale) => ({ ...stale, next: false }));
    } else {
      setPreviousAndNext((stale) => ({ ...stale, next: true }));
    }
    if (offset - limit < 0) {
      setPreviousAndNext((stale) => ({ ...stale, previous: false }));
    } else {
      setPreviousAndNext((stale) => ({ ...stale, previous: true }));
    }
    setProducts(filterdData.slice(offset, offset + limit));
  }, [offset, limit, data, filterdData]);

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        <div className="flex justify-center items-center">
          <Search handleSearch={handleFilter} />
        </div>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={handlePageChange}
          previousAndNext={previousAndNext}
        />
        <Button
          text="Next"
          handleClick={handlePageChange}
          previousAndNext={previousAndNext}
        />
      </div>
    </div>
  );
};
e;
