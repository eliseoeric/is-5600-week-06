import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

export default function CardList({ data }) {
  const limit = 10;

  // Full dataset (may get filtered)
  const [productsData, setProductsData] = useState(data);

  // Current page offset
  const [offset, setOffset] = useState(0);

  // Current page results
  const [products, setProducts] = useState(productsData.slice(0, limit));

  // 🔍 Filter products by tag titles
  const filterTags = (searchTerm) => {
    if (!searchTerm || searchTerm.trim() === "") {
      setProductsData(data); // reset dataset
    } else {
      const filtered = data.filter((p) =>
        p.tags?.some((tag) =>
          tag?.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setProductsData(filtered);
    }

    // reset pagination after search
    setOffset(0);
  };

  // 🔄 Pagination
  const handlePage = (direction) => {
    if (direction === "next" && offset + limit < productsData.length) {
      setOffset(offset + limit);
    }
    if (direction === "prev" && offset > 0) {
      setOffset(offset - limit);
    }
  };

  // Update page results when offset or dataset changes
  useEffect(() => {
    setProducts(productsData.slice(offset, offset + limit));
  }, [offset, productsData]);

  return (
    <div className="cf pa2">

      {/* SEARCH BAR */}
      <div className="flex items-center justify-center pa3">
        <Search handleSearch={filterTags} />
      </div>

      {/* PRODUCTS */}
      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <p className="tc mt4">No results found for this search.</p>
        )}
      </div>

      {/* PAGINATION BUTTONS */}
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePage("prev")} />

        <Button
          text="Next"
          handleClick={() => handlePage("next")}
          disabled={offset + limit >= productsData.length} // disable at end
        />
      </div>

    </div>
  );
}
