const CardList = () => {
  return ();
}

export default CardList;
// src/components/CardList.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data = [] }) => {
  const limit = 10;

  // full dataset from props (unchanged)
  const [originalData] = useState(data);

  // filteredData holds the dataset after search/filter by tag
  const [filteredData, setFilteredData] = useState(originalData);

  // pagination state
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(filteredData.slice(0, limit));

  // Update products whenever offset, limit, or filteredData changes
  useEffect(() => {
    // defend against negative offsets or offsets beyond end
    const safeOffset = Math.max(0, Math.min(offset, Math.max(0, filteredData.length - limit)));
    if (safeOffset !== offset) {
      setOffset(safeOffset);
      return; // wait for offset change to trigger effect again
    }
    setProducts(filteredData.slice(safeOffset, safeOffset + limit));
  }, [offset, limit, filteredData]);

  // filterTags will be passed to Search as handleSearch
  // It receives the search string and filters by tag name (case-insensitive)
  const filterTags = (searchTerm = '') => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setFilteredData(originalData);
      setOffset(0);
      return;
    }

    const filtered = originalData.filter((product) => {
      // assume product.tags is an array; guard if missing
      const tags = Array.isArray(product.tags) ? product.tags : [];
      return tags.some((t) => String(t).toLowerCase().includes(term));
    });

    setFilteredData(filtered);
    setOffset(0); // reset to first page of filtered results
  };

  // Single pagination handler: direction === -1 (previous) or +1 (next)
  const changePage = (direction) => {
    // compute new offset
    const newOffset = offset + direction * limit;
    // clamp to valid range
    const maxOffset = Math.max(0, Math.ceil(filteredData.length / limit) * limit - limit);
    const clamped = Math.max(0, Math.min(newOffset, maxOffset));
    setOffset(clamped);
  };

  // Disable logic for buttons
  const isPreviousDisabled = offset <= 0;
  const isNextDisabled = offset + limit >= filteredData.length || filteredData.length === 0;

  return (
    <div className="cf pa2">
      {/* Search box above cards */}
      <div className="mb3">
        <Search handleSearch={filterTags} />
      </div>

      <div className="mt2 mb2">
        {products.length === 0 ? (
          <p className="tc">No products found.</p>
        ) : (
          products.map((product) => <Card key={product.id} {...product} />)
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => changePage(-1)} disabled={isPreviousDisabled} />
        <div className="ph3">
          <span>
            Page {Math.floor(offset / limit) + 1} of {Math.max(1, Math.ceil(filteredData.length / limit))}
          </span>
        </div>
        <Button text="Next" handleClick={() => changePage(+1)} disabled={isNextDisabled} />
      </div>
    </div>
  );
};

export default CardList;
