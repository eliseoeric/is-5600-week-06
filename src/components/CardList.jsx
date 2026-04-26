import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState([]);

  // 🔥 FIXED FILTER FUNCTION
  const filterTags = (term) => {
    if (!term) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const search = term.toLowerCase();

    const filtered = data.filter((item) => {
      const text = `
        ${item.description || ""}
        ${item.alt_description || ""}
        ${item.user?.first_name || ""}
        ${item.user?.last_name || ""}
      `.toLowerCase();

      return text.includes(search);
    });

    setFilteredData(filtered);
    setOffset(0);
  };

  // 🔥 SAFE PAGINATION
  const handlePageChange = (direction) => {
    if (direction === "next" && offset + limit < filteredData.length) {
      setOffset(offset + limit);
    }

    if (direction === "prev" && offset > 0) {
      setOffset(offset - limit);
    }
  };

  // 🔥 UPDATE PRODUCTS VIEW
  useEffect(() => {
    const slice = filteredData.slice(offset, offset + limit);
    setProducts(slice);
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">

      {/* SEARCH */}
      <Search handleSearch={filterTags} />

      {/* CARDS */}
      <div className="mt2 mb2">
        {products.length === 0 ? (
          <p className="tc pa3">No results found</p>
        ) : (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange("prev")}
          disabled={offset === 0}
        />

        <Button
          text="Next"
          handleClick={() => handlePageChange("next")}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList;