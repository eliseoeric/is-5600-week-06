import React, { useMemo, useState } from "react";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Search from "./Search.jsx";

export default function CardList({ data = [] }) {
  const pageSize = 10;

  const base = Array.isArray(data) ? data : [];

  const [filtered, setFiltered] = useState(base);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const current = useMemo(() => {
    const offset = (page - 1) * pageSize;
    return filtered.slice(offset, offset + pageSize);
  }, [filtered, page]);

  const handleSearch = (term) => {
    const q = (term || "").trim().toLowerCase();
    const next = q
      ? base.filter(
          (p) =>
            Array.isArray(p.tags) &&
            p.tags.some((t) => String(t?.title ?? t).toLowerCase().includes(q))
        )
      : base;

    setFiltered(next);
    setPage(1);
  };

  const go = (delta) => setPage((p) => Math.min(Math.max(1, p + delta), totalPages));

  return (
    <div className="pa2">
      <div className="mt3 mb3">
        <Search handleSearch={handleSearch} />
      </div>

      <div className="cf pa2">
        {current.length === 0 ? (
          <p className="tc mid-gray w-100">No products found.</p>
        ) : (
          current.map((product) => <Card key={product.id} {...product} />)
        )}
      </div>

      {/* centered, below grid */}
      <nav className="w-100 mt4 tc">
        <div className="flex items-center justify-center">
          <Button text="Previous" handleClick={() => go(-1)} disabled={page <= 1} />
          <span className="mh3 mid-gray">
            Page {filtered.length ? page : 0} of {filtered.length ? totalPages : 0}
          </span>
          <Button text="Next" handleClick={() => go(1)} disabled={page >= totalPages} />
        </div>
      </nav>
    </div>
  );
}