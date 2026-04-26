import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Button from './Button';
import Search from './Search';

const ITEMS_PER_PAGE = 8;

const getProductTags = (product) => {
  const tagSource = [product.description, product.alt_description].filter(Boolean).join(' ');
  return Array.from(
    new Set(
      tagSource
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((word) => word.length > 3)
    )
  ).slice(0, 5);
};

const getProductPrice = (product) => {
  const base = product.likes ? Math.max(12, Math.min(99, Math.round(product.likes / 10))) : 29;
  return `$${base}.00`;
};

const ProductList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

  useEffect(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      setFilteredProducts(data);
      setCurrentPage(1);
      return;
    }

    const filtered = data.filter((product) => {
      const title = (product.description || product.alt_description || '').toLowerCase();
      const user = (product.user?.name || product.user?.username || '').toLowerCase();
      const tags = getProductTags(product).join(' ');
      return title.includes(query) || user.includes(query) || tags.includes(query);
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchTerm, data]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevious = (event) => {
    event.preventDefault();
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNext = (event) => {
    event.preventDefault();
    setCurrentPage((prevPage) => Math.min(pageCount, prevPage + 1));
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="pa2 pt0">
      <section className="mb4 pb3 bb b--black-10">
        <div className="flex flex-column flex-row-ns justify-between items-start items-center-ns gap3">
          <div className="w-100 w-60-ns">
            <h2 className="f3 fw6 mb2">Prints Gallery</h2>
            <p className="measure-narrow gray">Browse the latest prints using pagination and tag search. Click any item for a detailed single-product view.</p>
          </div>
          <div className="w-100 w-40-ns">
            <Search handleSearch={handleSearch} />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap -ml2 -mr2">
        {currentProducts.length ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              price={getProductPrice(product)}
              tags={getProductTags(product)}
            />
          ))
        ) : (
          <div className="pa4 bg-white br3 ba b--black-10 w-100">
            <p className="gray">No products match that tag. Try another keyword like “blood”, “texture”, or “landscape”.</p>
          </div>
        )}
      </section>

      <footer className="pv4 flex flex-column flex-row-ns items-center justify-between">
        <div className="mb3 mb0-ns">
          <small className="gray">
            Showing {currentProducts.length} of {filteredProducts.length} products
            {searchTerm ? ` for "${searchTerm}"` : ''}
          </small>
        </div>
        <div className="flex items-center">
          <Button text="Previous" handleClick={handlePrevious} disabled={currentPage === 1} />
          <Button text="Next" handleClick={handleNext} disabled={currentPage === pageCount} />
        </div>
      </footer>
    </div>
  );
};

export default ProductList;
