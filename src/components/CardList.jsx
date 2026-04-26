import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const limit = 10;

function CardList({ data }) {
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  const handlePageChange = (direction) => {
    if (direction === "next" && offset + limit < filteredData.length) {
      setOffset(offset + limit);
    }

    if (direction === "previous" && offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  const filterTags = (searchTerm) => {
    const term = searchTerm.toLowerCase().trim();

    if (term === "") {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) =>
      product.tags?.some((tag) =>
        tag.title.toLowerCase().includes(term)
      )
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
          <p className="tc">No products found.</p>
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange("previous")}
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
}

export default CardList;