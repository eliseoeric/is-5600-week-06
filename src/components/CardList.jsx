import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import PropTypes from "prop-types";

function CardList({ data, searchTerm }) {
  const limit = 10;
  const [filtered, setFiltered] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(filtered.slice(0, limit));

  // Filter products whenever searchTerm changes
  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) {
      setFiltered(data); // No search term, show all
    } else {
      setFiltered(
        data.filter((prod) => 
          // Check tags only
          prod.tags.some((t) => t.title.toLowerCase().includes(term))
        )
      );
    }

    setOffset(0); // Reset pagination
  }, [searchTerm, data]);

  // Update products for current page
  useEffect(() => {
    setProducts(filtered.slice(offset, offset + limit));
  }, [offset, filtered]);

  // Pagination handlers
  const handlePrev = () => setOffset((prev) => Math.max(prev - limit, 0));
  const handleNext = () =>
    setOffset((prev) => Math.min(prev + limit, Math.max(filtered.length - limit, 0)));

  const isPrevDisabled = offset === 0;
  const isNextDisabled = offset + limit >= filtered.length;

  return (
    <div className="pa3">
      {/* PRODUCT CARDS */}
      <div className="flex flex-wrap pa2">
        {products.length > 0 ? (
          products.map((prod) => <Card key={prod.id} {...prod} />)
        ) : (
          <p className="tc w-100">No matching products found.</p>
        )}
      </div>

      {/* PAGINATION BUTTONS */}
      {products.length > 0 && (
        <div className="flex items-center justify-center pa4">
          <Button text="Previous" handleClick={handlePrev} disabled={isPrevDisabled} />
          <Button text="Next" handleClick={handleNext} disabled={isNextDisabled} />
        </div>
      )}
    </div>
  );
}

CardList.propTypes = {
  data: PropTypes.array.isRequired,
  searchTerm: PropTypes.string,
};

export default CardList;
