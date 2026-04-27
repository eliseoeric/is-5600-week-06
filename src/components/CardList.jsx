import React from 'react';
import Card from './Card';
import Search from './Search';
import Button from './Button';

const CardList = ({ data }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;

  const filteredProducts = React.useMemo(() => {
    if (!searchTerm) return data;

    const query = searchTerm.toLowerCase().trim();
    return data.filter((product) => {
      const description = (product.description || product.alt_description || '').toLowerCase();
      const tags = (product.tags || []).map((tag) => tag.title.toLowerCase()).join(' ');
      return description.includes(query) || tags.includes(query);
    });
  }, [data, searchTerm]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = (event) => {
    event.preventDefault();
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <section className="mw8 center pb5">
      <div className="mb4">
        <h1 className="f2 lh-title">Fullstack Prints</h1>
        <p className="gray">Browse the product gallery, filter by tag, and view product details.</p>
      </div>

      <Search handleSearch={handleSearch} />

      <div className="flex justify-between items-center mb3">
        <p className="gray mv2">
          Showing {currentProducts.length} of {filteredProducts.length} products
          {searchTerm ? ` for "${searchTerm}"` : ''}
        </p>
        <p className="gray mv2">Page {currentPage} of {totalPages}</p>
      </div>

      <div className="cf">
        {currentProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-between mt4">
        <Button text="Previous" handleClick={handlePrevious} disabled={currentPage === 1} />
        <Button text="Next" handleClick={handleNext} disabled={currentPage === totalPages} />
      </div>
    </section>
  );
};

export default CardList;