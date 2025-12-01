const CardList = () => {
  return ();
}

export default CardList;
// src/components/CardList.jsx
import React, { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const LIMIT = 10;

export default function CardList({ data = [] }) {
  // fullData is the original dataset from props
  // filteredData is result after tag-filtering
  const [query, setQuery] = useState("");            // current search string
  const [offset, setOffset] = useState(0);           // pagination offset
  const [filteredData, setFilteredData] = useState(data); // data after filter

  // When `data` prop changes (or on mount), reset filteredData
  useEffect(() => {
    setFilteredData(data);
    setOffset(0);
  }, [data]);

  // filterTags - receives the search string from Search component
  const filterTags = (searchString) => {
    const s = (searchString || "").trim().toLowerCase();
    setQuery(s);
    setOffset(0); // reset to first page when filtering

    if (!s) {
      // empty search -> show all
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((product) =>
      Array.isArray(product.tags) &&
      product.tags.some((t) => String(t).toLowerCase().includes(s))
    );

    setFilteredData(filtered);
  };

  // Derived current page products using useMemo for performance
  const pageProducts = useMemo(() => {
    return filteredData.slice(offset, offset + LIMIT);
  }, [filteredData, offset]);

  // Unified changePage(delta) - delta will be +/- LIMIT
  const changePage = (delta) => {
    setOffset((prev) => {
      const next = prev + delta;
      if (next < 0) return 0;
      // Don't go past the last page start index
      const maxStart = Math.max(0, Math.floor((filteredData.length - 1) / LIMIT) * LIMIT);
      return Math.min(next, maxStart);
    });
  };

  // Are we at start / end?
  const atStart = offset === 0;
  const atEnd = offset + LIMIT >= filteredData.length;

  return (
    <section>
      <div className="mb3">
        <Search handleSearch={filterTags} />
      </div>

      <div className="cf pa2">
        {pageProducts.length === 0 ? (
          <p>No products found{query ? ` for "${query}"` : ""}.</p>
        ) : (
          pageProducts.map((p) => <Card key={p.id} {...p} />)
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => changePage(-LIMIT)} disabled={atStart} />
        <div className="ph3"> {Math.floor(offset / LIMIT) + 1} / {Math.max(1, Math.ceil(filteredData.length / LIMIT))} </div>
        <Button text="Next" handleClick={() => changePage(LIMIT)} disabled={atEnd} />
      </div>
    </section>
  );
}
