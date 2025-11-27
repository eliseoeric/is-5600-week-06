import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const CardList = ({ data }) => {
  const limit = 10;

  // All products after search filter
  const [filteredData, setFilteredData] = useState(data);

  // Current offset into filteredData
  const [offset, setOffset] = useState(0);

  // Products currently visible on screen
  const [products, setProducts] = useState(data.slice(0, limit));

  // Whenever filteredData or offset changes, update the visible page
  useEffect(() => {
    const pageItems = filteredData.slice(offset, offset + limit);
    setProducts(pageItems);
  }, [filteredData, offset]);

  // 🔍 Filter using description / alt_description
  const filterDescriptions = (term) => {
    const searchTerm = term.trim().toLowerCase();

    if (!searchTerm) {
      // Empty search → reset to full dataset
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const result = data.filter((product) => {
      const text =
        (product.description ?? product.alt_description ?? "").toLowerCase();
      return text.includes(searchTerm);
    });

    setFilteredData(result);
    setOffset(0); // always go back to first page after a new search
  };

  // 🔁 Single pagination handler
  const handlePageChange = (direction) => {
    setOffset((prevOffset) => {
      if (direction === "next") {
        const nextOffset = prevOffset + limit;
        if (nextOffset >= filteredData.length) {
          return prevOffset; // already at end
        }
        return nextOffset;
      }

      if (direction === "prev") {
        const nextOffset = prevOffset - limit;
        if (nextOffset < 0) {
          return 0; // don't go before first page
        }
        return nextOffset;
      }

      return prevOffset;
    });
  };

  const disablePrev = offset === 0;
  const disableNext = offset + limit >= filteredData.length;

  return (
    <div className="cf pa2">
      {/* Search box above the cards */}
      <div className="mt2 mb2">
        <Search handleSearch={filterDescriptions} />
      </div>

      {/* Cards */}
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}

        {products.length === 0 && (
          <p className="tc">No products found for that search.</p>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePageChange("prev")}
          disabled={disablePrev}
        />
        <Button
          text="Next"
          handleClick={() => handlePageChange("next")}
          disabled={disableNext}
        />
      </div>
    </div>
  );
};

export default CardList;
