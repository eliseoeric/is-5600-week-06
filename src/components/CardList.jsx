import { useEffect, useState } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

export default function CardList({ data }) {
  const limit = 10;
  const [searchTerm, setSearchTerm] = useState('');
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  const filteredData = data.filter((product) =>
    (product.tags ?? []).some((tag) =>
      String(tag.title ?? tag).toLowerCase().includes(searchTerm)
    ) || searchTerm === ''
  );

  useEffect(() => {
    const matches = data.filter((product) =>
      searchTerm === '' ||
      (product.tags ?? []).some((tag) =>
        String(tag.title ?? tag).toLowerCase().includes(searchTerm)
      )
    );

    setProducts(matches.slice(offset, offset + limit));
  }, [data, offset, searchTerm]);

  function filterTags(value) {
    setSearchTerm(value.trim().toLowerCase());
    setOffset(0);
  }

  function handlePagination(direction) {
    setOffset((currentOffset) => {
      const lastOffset =
        Math.max(0, Math.ceil(filteredData.length / limit) - 1) * limit;

      return Math.max(
        0,
        Math.min(currentOffset + direction * limit, lastOffset)
      );
    });
  }

  return (
    <main className="mw9 center pa3">
      <Search handleSearch={filterTags} />

      <p role="status">
        {filteredData.length === 0
          ? 'No products match this tag.'
          : `Showing ${offset + 1}–${Math.min(
              offset + limit,
              filteredData.length
            )} of ${filteredData.length} products`}
      </p>

      <div className="cf">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pv4">
        <Button
          text="Previous"
          handleClick={() => handlePagination(-1)}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => handlePagination(1)}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </main>
  );
}
