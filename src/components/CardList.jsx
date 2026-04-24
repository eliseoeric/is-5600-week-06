import React, { useEffect, useState } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;
  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [filteredData, offset]);

  const handlePageChange = (direction) => {
    setOffset((currentOffset) => {
      const nextOffset = currentOffset + direction * limit;
      const maxOffset = Math.max(filteredData.length - limit, 0);

      if (nextOffset < 0) return 0;
      if (nextOffset > maxOffset) return maxOffset;

      return nextOffset;
    });
  };

  const filterTags = (searchTerm) => {
    const normalized = searchTerm.trim().toLowerCase();

    if (!normalized) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) =>
      Array.isArray(product.tags) &&
      product.tags.some((tag) => tag.title.toLowerCase().includes(normalized))
    );

    setFilteredData(filtered);
    setOffset(0);
  };

  const disablePrevious = offset === 0;
  const disableNext = offset + limit >= filteredData.length;

  return (
    <section className="cf pa2">
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.length ? (
          products.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <div className="pa4 tc">
            <p className="f5">No products found for that tag.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => handlePageChange(-1)} disabled={disablePrevious} />
        <Button text="Next" handleClick={() => handlePageChange(1)} disabled={disableNext} />
      </div>
    </section>
  );
};

export default CardList;
