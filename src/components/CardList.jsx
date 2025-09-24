import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  const [allProducts, setAllProducts] = useState(data); // full dataset after filtering
  const [products, setProducts] = useState(data.slice(0, limit)); // visible products
  const [offset, setOffset] = useState(0);

  // Filter products by tags
  const filterTags = (searchTerm) => {
    if (!searchTerm) {
      setAllProducts(data);
      setOffset(0);
      setProducts(data.slice(0, limit));
      return;
    }

    const filtered = data.filter((product) =>
      product.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setAllProducts(filtered);
    setOffset(0); // reset to first page
    setProducts(filtered.slice(0, limit));
  };

  //Update products when offset or filtered dataset changes
  useEffect(() => {
    setProducts(allProducts.slice(offset, offset + limit));
  }, [offset, limit, allProducts]);

  // Unified pagination
  const handlePageChange = (direction) => {
    if (direction === "prev" && offset > 0) {
      setOffset(offset - limit);
    }
    if (direction === "next" && offset + limit < allProducts.length) {
      setOffset(offset + limit);
    }
  };

  return (
    <div className="cf pa2">
      {/* Search bar */}
      <div className="mb3">
        <Search handleSearch={filterTags} />
      </div>

      {/* Cards */}
      <div className="mt2 mb2 flex flex-wrap">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange("prev")}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => handlePageChange("next")}
          disabled={offset + limit >= allProducts.length}
        />
      </div>
    </div>
  );
};

export default CardList;
