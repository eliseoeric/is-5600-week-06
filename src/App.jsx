import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import Button from './components/Button';
import Search from './components/Search';
import SingleView from './components/SingleView';
import productData from './data/full-products';

const PAGE_SIZE = 10;

function App() {
  const [offset, setOffset] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [products, setProducts] = useState(
    productData.slice(0, PAGE_SIZE)
  );

  useEffect(() => {
    setProducts(
      filteredProducts.slice(offset, offset + PAGE_SIZE)
    );
  }, [offset, filteredProducts]);

  function handleSearch(searchTerm) {
    const term = searchTerm.trim().toLowerCase();

    const matches = productData.filter((product) => {
      const tags = product.tags ?? [];

      return tags.some((tag) =>
        tag.title.toLowerCase().includes(term)
      );
    });

    setFilteredProducts(term ? matches : productData);
    setOffset(0);
  }

  function handlePageChange(direction) {
    setOffset((currentOffset) => {
      const nextOffset = currentOffset + direction * PAGE_SIZE;

      if (nextOffset < 0 || nextOffset >= filteredProducts.length) {
        return currentOffset;
      }

      return nextOffset;
    });
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className="pa3">
              <h1>Prints</h1>

              <Search handleSearch={handleSearch} />

              <p>{filteredProducts.length} products found</p>

              <div className="flex justify-between mb3">
                <Button
                  text="Previous"
                  handleClick={() => handlePageChange(-1)}
                  disabled={offset === 0}
                />

                <Button
                  text="Next"
                  handleClick={() => handlePageChange(1)}
                  disabled={
                    offset + PAGE_SIZE >= filteredProducts.length
                  }
                />
              </div>

              {products.length > 0 ? (
                <CardList products={products} />
              ) : (
                <p>No products match that tag.</p>
              )}
            </main>
          }
        />

        <Route
          path="/product/:id"
          element={<SingleView data={productData} />}
        />
      </Routes>
    </div>
  );
}

export default App;