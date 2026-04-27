import React, { useEffect, useState } from 'react';
import Card from './Card';
import Search from './Search';

const limit = 8;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();

    if (term === '') {
      setFilteredData(data);
      return;
    }

    const results = data.filter((product) =>
      product.tags?.some((tag) =>
        tag.title.toLowerCase().includes(term)
      )
    );

    setFilteredData(results);
    setOffset(0);
  }, [searchTerm, data]);

  useEffect(() => {
    setCurrentProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  const goPrevious = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  const goNext = () => {
    if (offset + limit < filteredData.length) {
      setOffset(offset + limit);
    }
  };

  return (
    <main>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {currentProducts.length === 0 ? (
        <h2 style={{ textAlign: 'center' }}>No products found</h2>
      ) : (
        <div className="card-grid">
          {currentProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      )}

      <div className="pagination">
        <button onClick={goPrevious} disabled={offset === 0}>
          Previous
        </button>

        <button
          onClick={goNext}
          disabled={offset + limit >= filteredData.length}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default CardList;