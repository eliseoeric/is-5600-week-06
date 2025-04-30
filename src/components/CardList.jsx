import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  const handlePagination = (direction) => {
    const newOffset = offset + direction * limit;
    if (newOffset >= 0 && newOffset < filteredData.length) {
      setOffset(newOffset);
    }
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  const filterTags = (searchTerm) => {
    const filtered = data.filter((product) =>
      product.tags.some(({ title }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredData(filtered);
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
          <p>No products found.</p>
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePagination(-1)}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => handlePagination(1)}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList;
