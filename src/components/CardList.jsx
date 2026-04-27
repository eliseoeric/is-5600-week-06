import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const limit = 10;

export default function CardList({ data }) {
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  const handlePageChange = (direction) => {
    const newOffset = offset + direction * limit;

    if (newOffset >= 0 && newOffset < filteredData.length) {
      setOffset(newOffset);
    }
  };

  const filterTags = (searchTerm) => {
    const term = searchTerm.toLowerCase().trim();

    if (term === "") {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filteredProducts = data.filter((product) =>
      product.tags?.some((tag) =>
        tag.title.toLowerCase().includes(term)
      )
    );

    setFilteredData(filteredProducts);
    setOffset(0);
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        ) : (
          <p className="tc f4">No products found.</p>
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange(-1)}
          disabled={offset === 0}
        />

        <Button
          text="Next"
          handleClick={() => handlePageChange(1)}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
}