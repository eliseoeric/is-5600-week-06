import React, { useEffect, useMemo, useState } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const ITEMS_PER_PAGE = 10;

export default function CardList({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageProducts, setPageProducts] = useState([]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return data;

    return data.filter((product) => {
      const tags = product.tags ?? [];
      return tags.some((tag) => tag.title.toLowerCase().includes(term));
    });
  }, [data, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      return;
    }

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    setPageProducts(filteredProducts.slice(start, start + ITEMS_PER_PAGE));
  }, [filteredProducts, currentPage, totalPages]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePage = (direction) => {
    setCurrentPage((current) => {
      const nextPage = current + direction;
      if (nextPage < 1 || nextPage > totalPages) return current;
      return nextPage;
    });
  };

  return (
    <section className="pa4">
      <Search handleSearch={handleSearch} />

      <div className="flex flex-wrap justify-center">
        {pageProducts.length === 0 ? (
          <div className="w-100 tc pa4 gray">No products match your search.</div>
        ) : (
          pageProducts.map((product) => <Card key={product.id} {...product} />)
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={(e) => {
            e.preventDefault();
            handlePage(-1);
          }}
          disabled={!hasPrevious}
        />
        <span className="ph3 f6 gray">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          text="Next"
          handleClick={(e) => {
            e.preventDefault();
            handlePage(1);
          }}
          disabled={!hasNext}
        />
      </div>

      <div className="tc gray f6">
        Showing {pageProducts.length} of {filteredProducts.length} products
      </div>
    </section>
  );
}
